import { 
  users, type User, type InsertUser,
  type Contact, type InsertContact,
  type Newsletter, type InsertNewsletter
} from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact methods
  createContactSubmission(contact: InsertContact & { createdAt: string }): Promise<Contact>;
  
  // Newsletter methods
  getNewsletterByEmail(email: string): Promise<Newsletter | undefined>;
  createNewsletterSubscription(newsletter: InsertNewsletter & { createdAt: string }): Promise<Newsletter>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, Contact>;
  private newsletters: Map<number, Newsletter>;
  
  currentId: number;
  contactId: number;
  newsletterId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.newsletters = new Map();
    
    this.currentId = 1;
    this.contactId = 1;
    this.newsletterId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Contact methods
  async createContactSubmission(contactData: InsertContact & { createdAt: string }): Promise<Contact> {
    const id = this.contactId++;
    const contact = { ...contactData, id } as Contact;
    this.contacts.set(id, contact);
    return contact;
  }
  
  // Newsletter methods
  async getNewsletterByEmail(email: string): Promise<Newsletter | undefined> {
    return Array.from(this.newsletters.values()).find(
      (newsletter) => newsletter.email === email,
    );
  }
  
  async createNewsletterSubscription(newsletterData: InsertNewsletter & { createdAt: string }): Promise<Newsletter> {
    const id = this.newsletterId++;
    const newsletter = { ...newsletterData, id } as Newsletter;
    this.newsletters.set(id, newsletter);
    return newsletter;
  }
}

export const storage = new MemStorage();
