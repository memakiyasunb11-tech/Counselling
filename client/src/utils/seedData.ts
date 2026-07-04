import { collection, doc, setDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const careers = [
  {
    title: 'Software Engineer',
    overview: 'Design, develop, and maintain software systems.',
    skillsNeeded: ['Programming', 'Problem Solving', 'System Design'],
    salaryRange: '$80,000 - $160,000',
    futureScope: 'High demand as technology continues to grow.'
  },
  {
    title: 'Data Scientist',
    overview: 'Analyze and interpret complex data to help companies make decisions.',
    skillsNeeded: ['Statistics', 'Machine Learning', 'Python'],
    salaryRange: '$90,000 - $170,000',
    futureScope: 'Excellent. Data is the new oil.'
  },
  {
    title: 'Clinical Psychologist',
    overview: 'Assess, diagnose, and treat mental, emotional, and behavioral disorders.',
    skillsNeeded: ['Empathy', 'Communication', 'Analytical thinking'],
    salaryRange: '$70,000 - $120,000',
    futureScope: 'Growing need for mental health professionals.'
  },
  {
    title: 'UX/UI Designer',
    overview: 'Create user-friendly interfaces and experiences for digital products.',
    skillsNeeded: ['Design Thinking', 'Figma', 'User Research'],
    salaryRange: '$75,000 - $140,000',
    futureScope: 'Strong demand as digital presence becomes vital.'
  }
];

const assessments = [
  {
    title: 'Engineering Aptitude Test',
    category: 'Aptitude',
    description: 'Test your logical and numerical reasoning for engineering careers.',
    isTimed: true,
    timeLimitMinutes: 45,
    isActive: true
  },
  {
    title: 'Personality & Career Fit',
    category: 'Personality',
    description: 'Understand your work style and environment preferences.',
    isTimed: false,
    timeLimitMinutes: 0,
    isActive: true
  }
];

export const seedDatabase = async () => {
  try {
    // Check if data already exists to prevent duplicates
    const careersSnapshot = await getDocs(collection(db, 'careers'));
    if (careersSnapshot.empty) {
      console.log('Seeding careers...');
      for (const career of careers) {
        const newDoc = doc(collection(db, 'careers'));
        await setDoc(newDoc, { ...career, _id: newDoc.id, createdAt: new Date().toISOString() });
      }
    }

    const assessmentsSnapshot = await getDocs(collection(db, 'assessments'));
    if (assessmentsSnapshot.empty) {
      console.log('Seeding assessments...');
      for (const assessment of assessments) {
        const newDoc = doc(collection(db, 'assessments'));
        await setDoc(newDoc, { ...assessment, _id: newDoc.id, createdAt: new Date().toISOString() });
      }
    }

    console.log('Database seeded successfully!');
    return true;
  } catch (error) {
    console.error('Error seeding database:', error);
    throw error;
  }
};
