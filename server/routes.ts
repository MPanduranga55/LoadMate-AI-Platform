import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertNewsletterSchema } from "@shared/schema";
import { ZodError, z } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContactSubmission({
        ...contactData,
        createdAt: new Date().toISOString(),
      });
      
      res.status(201).json({
        message: "Contact submission received successfully",
        contact,
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.message });
      } else {
        console.error("Error processing contact submission:", error);
        res.status(500).json({ message: "Failed to process contact submission" });
      }
    }
  });

  app.post("/api/newsletter", async (req: Request, res: Response) => {
    try {
      const newsletterData = insertNewsletterSchema.parse(req.body);
      
      // Check if email already exists
      const existingSubscription = await storage.getNewsletterByEmail(newsletterData.email);
      
      if (existingSubscription) {
        return res.status(409).json({ message: "This email is already subscribed" });
      }
      
      const subscription = await storage.createNewsletterSubscription({
        ...newsletterData,
        createdAt: new Date().toISOString(),
      });
      
      res.status(201).json({
        message: "Newsletter subscription successful",
        subscription,
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.message });
      } else {
        console.error("Error processing newsletter subscription:", error);
        res.status(500).json({ message: "Failed to process newsletter subscription" });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
