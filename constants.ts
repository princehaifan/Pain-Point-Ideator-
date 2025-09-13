
import type { PainPoint } from './types';

export const CATEGORIES = [
  "Productivity",
  "Health & Wellness",
  "Finance",
  "Social & Relationships",
  "Personal Growth",
  "Career & Work",
  "Daily Life",
  "Technology",
  "Nigerian Challenges"
];

export const PAIN_POINTS: PainPoint[] = [
  {
    name: "Procrastination",
    emoji: "⏳",
    description: "The struggle to start or complete tasks.",
    category: "Productivity",
  },
  {
    name: "Weight Loss",
    emoji: "⚖️",
    description: "The desire to achieve a healthy weight.",
    category: "Health & Wellness",
  },
  {
    name: "Money Worries",
    emoji: "💸",
    description: "Stress related to personal finance and savings.",
    category: "Finance",
  },
  {
    name: "Poor Sleep",
    emoji: "😴",
    description: "Difficulty falling asleep or staying asleep.",
    category: "Health & Wellness",
  },
  {
    name: "Loneliness",
    emoji: "👤",
    description: "Feeling isolated and lacking connection.",
    category: "Social & Relationships",
  },
  {
    name: "Finding a Job",
    emoji: "👔",
    description: "The challenge of navigating the job market.",
    category: "Career & Work",
  },
  {
    name: "Social Anxiety",
    emoji: "😬",
    description: "Fear and discomfort in social situations.",
    category: "Social & Relationships",
  },
  {
    name: "Lack of Motivation",
    emoji: "📉",
    description: "Struggling to find the drive to pursue goals.",
    category: "Personal Growth",
  },
  {
    name: "Stress & Burnout",
    emoji: "🤯",
    description: "Feeling overwhelmed and emotionally exhausted.",
    category: "Health & Wellness",
  },
  {
    name: "Bad Habits",
    emoji: "🚭",
    description: "Trying to break negative patterns like smoking.",
    category: "Personal Growth",
  },
  {
    name: "Information Overload",
    emoji: "🌊",
    description: "Feeling overwhelmed by too much information.",
    category: "Technology",
  },
  {
    name: "Decision Fatigue",
    emoji: "😵",
    description: "Difficulty making choices after a long day.",
    category: "Productivity",
  },
  {
    name: "Clutter",
    emoji: "🧹",
    description: "Messy and disorganized living or work spaces.",
    category: "Daily Life",
  },
  {
    name: "Time Management",
    emoji: "🕰️",
    description: "Feeling like there aren't enough hours in the day.",
    category: "Productivity",
  },
  {
    name: "Learning a New Skill",
    emoji: "🧠",
    description: "The frustration of acquiring new knowledge.",
    category: "Personal Growth",
  },
  {
    name: "Networking",
    emoji: "🤝",
    description: "The awkwardness of building professional connections.",
    category: "Career & Work",
  },
  {
    name: "Public Speaking",
    emoji: "🎤",
    description: "Fear of speaking in front of an audience.",
    category: "Personal Growth",
  },
  {
    name: "Meal Planning",
    emoji: "🥗",
    description: "The daily chore of deciding what to eat.",
    category: "Daily Life",
  },
  {
    name: "Staying Hydrated",
    emoji: "💧",
    description: "Forgetting to drink enough water throughout the day.",
    category: "Health & Wellness",
  },
  {
    name: "Exercise Consistency",
    emoji: "💪",
    description: "Sticking to a workout routine long-term.",
    category: "Health & Wellness",
  },
  {
    name: "Budgeting",
    emoji: "💰",
    description: "Managing income and expenses to save money.",
    category: "Finance",
  },
  {
    name: "Debt Management",
    emoji: "💳",
    description: "The stress of paying off loans and credit cards.",
    category: "Finance",
  },
  {
    name: "Parenting Challenges",
    emoji: "👨‍👩‍👧‍👦",
    description: "The daily struggles of raising children.",
    category: "Social & Relationships",
  },
  {
    name: "Relationship Problems",
    emoji: "💔",
    description: "Navigating conflicts and issues with a partner.",
    category: "Social & Relationships",
  },
  {
    name: "Making Friends",
    emoji: "🤗",
    description: "The difficulty of forming new friendships as an adult.",
    category: "Social & Relationships",
  },
  {
    name: "Work Productivity",
    emoji: "🎯",
    description: "Staying focused and avoiding distractions at work.",
    category: "Productivity",
  },
  {
    name: "Creative Blocks",
    emoji: "✍️",
    description: "The inability to produce new creative work.",
    category: "Personal Growth",
  },
  {
    name: "Imposter Syndrome",
    emoji: "🎭",
    description: "Feeling like a fraud despite your accomplishments.",
    category: "Career & Work",
  },
  {
    name: "Mindfulness",
    emoji: "🧘",
    description: "Difficulty being present and calming the mind.",
    category: "Health & Wellness",
  },
  {
    name: "Healthy Eating",
    emoji: "🥦",
    description: "Avoiding junk food and making nutritious choices.",
    category: "Health & Wellness",
  },
  {
    name: "Chronic Pain",
    emoji: "🤕",
    description: "Managing long-term physical discomfort and pain.",
    category: "Health & Wellness",
  },
  {
    name: "Pet Care",
    emoji: "🐾",
    description: "Managing the responsibilities of owning a pet.",
    category: "Daily Life",
  },
  {
    name: "Home Maintenance",
    emoji: "🛠️",
    description: "Keeping up with repairs and chores around the house.",
    category: "Daily Life",
  },
  {
    name: "Travel Planning",
    emoji: "✈️",
    description: "The complexity and stress of organizing trips.",
    category: "Daily Life",
  },
  {
    name: "Finding a Gift",
    emoji: "🎁",
    description: "The challenge of finding the perfect present.",
    category: "Daily Life",
  },
  {
    name: "Password Management",
    emoji: "🔑",
    description: "Remembering and managing dozens of credentials.",
    category: "Technology",
  },
  {
    name: "Digital Detox",
    emoji: "📱",
    description: "Reducing screen time and dependency on devices.",
    category: "Technology",
  },
  {
    name: "Negotiating Salary",
    emoji: "💼",
    description: "The anxiety of asking for better compensation.",
    category: "Career & Work",
  },
  {
    name: "Dealing with Bureaucracy",
    emoji: "📜",
    description: "Navigating complex paperwork for official services.",
    category: "Daily Life",
  },
  {
    name: "Car Troubles",
    emoji: "🚗",
    description: "Handling unexpected vehicle maintenance and repairs.",
    category: "Daily Life",
  },
  {
    name: "Caring for Elders",
    emoji: "👵",
    description: "The challenge of caring for aging parents or relatives.",
    category: "Social & Relationships",
  },
  {
    name: "Eco-Anxiety",
    emoji: "🌍",
    description: "Stress about climate change and environmental issues.",
    category: "Health & Wellness",
  },
  {
    name: "Staying Informed",
    emoji: "📰",
    description: "Keeping up with news without getting overwhelmed.",
    category: "Technology",
  },
  {
    name: "Learning to Cook",
    emoji: "🍳",
    description: "The difficulty of preparing your own meals from scratch.",
    category: "Personal Growth",
  },
  {
    name: "Managing Freelance Work",
    emoji: "🧾",
    description: "Juggling clients, projects, and invoices.",
    category: "Career & Work",
  },
  {
    name: "Negative Self-Talk",
    emoji: "🗣️",
    description: "Overcoming a critical inner voice and self-doubt.",
    category: "Personal Growth",
  },
  {
    name: "Boredom",
    emoji: "🥱",
    description: "Lacking stimulation or interesting activities.",
    category: "Personal Growth",
  },
  {
    name: "FOMO",
    emoji: "👀",
    description: "Anxiety over missing out on exciting events.",
    category: "Social & Relationships",
  },
  {
    name: "Inbox Overload",
    emoji: "📧",
    description: "Managing an overflowing and unorganized email inbox.",
    category: "Productivity",
  },
  {
    name: "Student Debt",
    emoji: "🎓",
    description: "The long-term burden of paying for education.",
    category: "Finance",
  },
  {
    name: "Moving",
    emoji: "🚚",
    description: "The stress and logistics of relocating to a new home.",
    category: "Daily Life",
  },
  {
    name: "Finding a Hobby",
    emoji: "🎨",
    description: "Discovering new interests, passions, and activities.",
    category: "Personal Growth",
  },
  {
    name: "Morning Routine",
    emoji: "☀️",
    description: "Waking up early and starting the day productively.",
    category: "Productivity",
  },
  {
    name: "Work-Life Balance",
    emoji: "⚖️",
    description: "Struggling to separate professional and personal life.",
    category: "Career & Work",
  },
  {
    name: "Asking for Help",
    emoji: "🙋",
    description: "The difficulty of admitting you need support.",
    category: "Personal Growth",
  },
  {
    name: "Setting Boundaries",
    emoji: "🙅",
    description: "The challenge of saying 'no' to others.",
    category: "Social & Relationships",
  },
  {
    name: "Unreliable Power",
    emoji: "💡",
    description: "The daily struggle with inconsistent electricity and reliance on generators.",
    category: "Nigerian Challenges"
  },
  {
    name: "Bad Roads & Traffic",
    emoji: "🚗",
    description: "Navigating pothole-ridden roads and spending hours in gridlock.",
    category: "Nigerian Challenges"
  },
  {
    name: "High Cost of Living",
    emoji: "₦",
    description: "Constant stress from the rising prices of everyday goods and services.",
    category: "Nigerian Challenges"
  },
  {
    name: "Youth Unemployment",
    emoji: "🎓",
    description: "The difficulty of finding stable employment after graduation.",
    category: "Nigerian Challenges"
  },
  {
    name: "Expensive Data",
    emoji: "📶",
    description: "The high cost and often poor quality of mobile internet services.",
    category: "Nigerian Challenges"
  },
  {
    name: "Insecurity",
    emoji: "🔐",
    description: "Pervasive anxiety about personal safety, kidnapping, and robbery.",
    category: "Nigerian Challenges"
  },
  {
    name: "Fuel Scarcity",
    emoji: "⛽",
    description: "The recurring chaos of finding and buying fuel for cars and generators.",
    category: "Nigerian Challenges"
  },
  {
    name: "Healthcare Access",
    emoji: "🏥",
    description: "The challenge of finding and affording quality medical care.",
    category: "Nigerian Challenges"
  },
  {
    name: "Police Harassment",
    emoji: "🚓",
    description: "The fear and frustration of dealing with corrupt or abusive law enforcement.",
    category: "Nigerian Challenges"
  },
  {
    name: "Payment Failures",
    emoji: "💳",
    description: "Frustration from failed bank transfers and unreliable POS transactions.",
    category: "Nigerian Challenges"
  },
  {
    name: "Water Scarcity",
    emoji: "💧",
    description: "The daily challenge of sourcing clean water for drinking and sanitation.",
    category: "Nigerian Challenges"
  },
  {
    name: "Corruption & Red Tape",
    emoji: "📜",
    description: "Navigating slow, inefficient, and often corrupt official systems.",
    category: "Nigerian Challenges"
  },
  {
    name: "Finding Housing",
    emoji: "🏡",
    description: "The stressful and expensive process of searching for rental accommodation.",
    category: "Nigerian Challenges"
  },
  {
    name: "Finding Reliable Artisans",
    emoji: "🛠️",
    description: "The difficulty of hiring competent and honest tradespeople.",
    category: "Nigerian Challenges"
  },
  {
    name: "Japa (Emigration)",
    emoji: "✈️",
    description: "The desire to relocate abroad for better opportunities and quality of life.",
    category: "Nigerian Challenges"
  },
  {
    name: "Access to Funding",
    emoji: "💰",
    description: "The struggle for entrepreneurs to find investors and support for their ideas.",
    category: "Nigerian Challenges"
  },
  {
    name: "Fake Products",
    emoji: "🛍️",
    description: "The difficulty of distinguishing genuine products from counterfeits.",
    category: "Nigerian Challenges"
  },
  {
    name: "Logistics & Delivery",
    emoji: "📦",
    description: "The challenge of sending and receiving packages reliably across the country.",
    category: "Nigerian Challenges"
  },
  {
    name: "Social Pressure",
    emoji: "🤳",
    description: "The pressure to maintain an expensive lifestyle for social appearances.",
    category: "Nigerian Challenges"
  },
  {
    name: "Navigating Local Markets",
    emoji: "🛒",
    description: "The hassle of price haggling and finding quality goods in crowded markets.",
    category: "Nigerian Challenges"
  }
];
