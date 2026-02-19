export interface BlogPost {
    id: string;
    category: string;
    title: string;
    excerpt: string;
    content: string;
    readTime: string;
    author: string;
    date: string;
    color: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: "foods-boost-immune-system",
        category: "Nutrition",
        title: "10 Foods That Boost Your Immune System Naturally",
        excerpt: "Discover the power of nutrition in strengthening your body's natural defenses against illness and infections.",
        content: "Feeding your body certain foods may help keep your immune system strong. If you're looking for ways to prevent winter colds and the flu, your first step should be a visit to your local grocery store. Plan your meals to include these 10 powerful immune system boosters.\n\n1. Citrus fruits\n2. Red bell peppers\n3. Broccoli\n4. Garlic\n5. Ginger\n6. Spinach\n7. Yogurt\n8. Almonds\n9. Sunflower seeds\n10. Turmeric\n\nEating right is a great start, and there are other things you can do to protect you and your family from the flu, cold, and other illnesses.",
        readTime: "4 min read",
        author: "Dr. Sarah Mitchell",
        date: "Feb 10, 2026",
        color: "bg-green-100 text-green-700",
    },
    {
        id: "early-warning-signs-heart",
        category: "Heart Health",
        title: "Understanding Your Heart: Early Warning Signs to Never Ignore",
        excerpt: "Cardiologists reveal the subtle symptoms that often go unnoticed but could indicate serious cardiovascular issues.",
        content: "Heart disease is the leading cause of death for men, women, and people of most racial and ethnic groups in the United States. One person dies every 34 seconds in the United States from cardiovascular disease.\n\nKey warning signs include:\n- Chest discomfort\n- Nausea, indigestion, heartburn, or stomach pain\n- Pain that spreads to the arm\n- Dizzy or lightheadedness\n- Throat or jaw pain\n- Exhaustion\n- Snoring\n- Sweating\n\nDon't wait to get help if you experience any of these heart attack warning signs. Some heart attacks are sudden and intense, but most start slowly, with mild pain or discomfort.",
        readTime: "6 min read",
        author: "Dr. Robert Chen",
        date: "Feb 5, 2026",
        color: "bg-red-100 text-red-700",
    },
    {
        id: "vaccination-schedule-2026",
        category: "Child Health",
        title: "Vaccination Schedule 2026: A Complete Guide for Parents",
        excerpt: "Stay up-to-date with the recommended vaccination timeline for infants, toddlers, and school-age children.",
        content: "Vaccines are one of the most effective ways to protect your child from serious diseases. The 2026 recommended immunization schedule includes updates for flu, COVID-19, and RSV protections.\n\nFrom birth to 15 months, your child will receive vaccinations for Hepatitis B, Rotavirus, DTaP, Hib, Pneumococcal, and Polio. Keeping track of these can be overwhelming, but regular check-ups with your pediatrician ensure your child stays on track. Remember, vaccines are safe and effective.",
        readTime: "5 min read",
        author: "Dr. Aisha Patel",
        date: "Jan 28, 2026",
        color: "bg-blue-100 text-blue-700",
    },
    {
        id: "sleep-and-mental-health",
        category: "Mental Health",
        title: "The Critical Link Between Sleep and Mental Well-being",
        excerpt: "Why getting quality sleep is just as important as diet and exercise for maintaining good mental health.",
        content: "Sleep and mental health are closely connected. Sleep deprivation affects your psychological state and mental health. And those with mental health problems are more likely to have insomnia or other sleep disorders.\n\nTips for better sleep:\n- Stick to a sleep schedule\n- Pay attention to what you eat and drink\n- Create a restful environment\n- Limit daytime naps\n- Include physical activity in your daily routine\n- Manage worries",
        readTime: "5 min read",
        author: "Dr. Emily Wong",
        date: "Jan 15, 2026",
        color: "bg-purple-100 text-purple-700",
    },
    {
        id: "benefits-of-regular-exercise",
        category: "Fitness",
        title: "5 Surprising Benefits of Regular Light Exercise",
        excerpt: "You don't need to run a marathon to stay healthy. Learn how simple daily movement can transform your health.",
        content: "Regular physical activity is one of the most important things you can do for your health. Being physically active can improve your brain health, help manage weight, reduce the risk of disease, strengthen bones and muscles, and improve your ability to do everyday activities.\n\nBenefits include:\n1. Improved mood\n2. Boosted energy\n3. Better sleep\n4. Controlled weight\n5. Combats health conditions and diseases",
        readTime: "3 min read",
        author: "Dr. James Wilson",
        date: "Jan 05, 2026",
        color: "bg-orange-100 text-orange-700",
    }
];
