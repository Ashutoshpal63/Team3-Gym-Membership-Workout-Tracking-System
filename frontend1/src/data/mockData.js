export const mockUsers = {
  member: {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'member',
    membershipType: 'Premium Annual',
    membershipStart: '2024-01-15',
    membershipEnd: '2025-01-15',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  admin: {
    id: 2,
    name: 'Sarah Admin',
    email: 'admin@example.com',
    role: 'admin',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  trainer: {
    id: 3,
    name: 'Mike Trainer',
    email: 'trainer@example.com',
    role: 'trainer',
    specialty: 'Strength & Conditioning',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200'
  }
};

export const membershipPlans = [
  {
    id: 1,
    name: 'Basic Monthly',
    price: 29.99,
    duration: '1 Month',
    features: ['Gym Access', 'Locker Room', 'Mobile App']
  },
  {
    id: 2,
    name: 'Premium Monthly',
    price: 49.99,
    duration: '1 Month',
    features: ['All Basic Features', 'Group Classes', '1 PT Session/Month', 'Nutrition Consultation']
  },
  {
    id: 3,
    name: 'Premium Annual',
    price: 499.99,
    duration: '12 Months',
    features: ['All Premium Features', '2 Months Free', 'Priority Booking', 'Guest Passes'],
    popular: true
  },
  {
    id: 4,
    name: 'Elite Annual',
    price: 899.99,
    duration: '12 Months',
    features: ['All Premium Features', 'Unlimited PT Sessions', 'Customized Diet Plan', 'Supplement Guidance', 'Spa Access']
  }
];

export const workoutHistory = [
  { date: '2024-11-01', weight: 185, benchPress: 135, squat: 185, deadlift: 225 },
  { date: '2024-11-08', weight: 184, benchPress: 140, squat: 190, deadlift: 230 },
  { date: '2024-11-15', weight: 183, benchPress: 145, squat: 195, deadlift: 235 },
  { date: '2024-11-22', weight: 182, benchPress: 150, squat: 200, deadlift: 240 },
  { date: '2024-11-29', weight: 180, benchPress: 155, squat: 205, deadlift: 245 },
  { date: '2024-12-04', weight: 179, benchPress: 160, squat: 210, deadlift: 250 }
];

export const recentWorkouts = [
  {
    id: 1,
    date: '2024-12-04',
    type: 'Chest & Triceps',
    duration: '65 mins',
    exercises: [
      { name: 'Bench Press', sets: 4, reps: 8, weight: 160 },
      { name: 'Incline Dumbbell Press', sets: 3, reps: 10, weight: 60 },
      { name: 'Cable Flyes', sets: 3, reps: 12, weight: 40 },
      { name: 'Tricep Dips', sets: 3, reps: 12, weight: 0 }
    ]
  },
  {
    id: 2,
    date: '2024-12-02',
    type: 'Back & Biceps',
    duration: '70 mins',
    exercises: [
      { name: 'Deadlift', sets: 4, reps: 6, weight: 250 },
      { name: 'Pull-ups', sets: 4, reps: 10, weight: 0 },
      { name: 'Barbell Row', sets: 3, reps: 10, weight: 135 },
      { name: 'Bicep Curls', sets: 3, reps: 12, weight: 35 }
    ]
  }
];

export const adminStats = {
  activeMembers: 487,
  revenue: 23450,
  checkInsToday: 142,
  expiringThisMonth: 23
};

export const allMembers = [
  { id: 1, name: 'John Doe', plan: 'Premium Annual', status: 'Active', expiry: '2025-01-15', lastCheckIn: '2024-12-04' },
  { id: 2, name: 'Jane Smith', plan: 'Basic Monthly', status: 'Active', expiry: '2024-12-20', lastCheckIn: '2024-12-03' },
  { id: 3, name: 'Mike Johnson', plan: 'Premium Monthly', status: 'Expiring Soon', expiry: '2024-12-10', lastCheckIn: '2024-12-01' },
  { id: 4, name: 'Emily Brown', plan: 'Elite Annual', status: 'Active', expiry: '2025-03-15', lastCheckIn: '2024-12-04' },
  { id: 5, name: 'Chris Wilson', plan: 'Basic Monthly', status: 'Active', expiry: '2025-01-05', lastCheckIn: '2024-12-04' },
  { id: 6, name: 'Sarah Davis', plan: 'Premium Annual', status: 'Active', expiry: '2025-02-20', lastCheckIn: '2024-12-03' },
  { id: 7, name: 'Tom Martinez', plan: 'Premium Monthly', status: 'Expiring Soon', expiry: '2024-12-08', lastCheckIn: '2024-11-30' },
  { id: 8, name: 'Lisa Anderson', plan: 'Elite Annual', status: 'Active', expiry: '2025-04-10', lastCheckIn: '2024-12-04' }
];

export const trainerClients = [
  {
    id: 1,
    name: 'Alex Turner',
    age: 28,
    goal: 'Muscle Gain',
    progress: 75,
    lastSession: '2024-12-03',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: 2,
    name: 'Rachel Green',
    age: 32,
    goal: 'Weight Loss',
    progress: 60,
    lastSession: '2024-12-04',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: 3,
    name: 'David Lee',
    age: 25,
    goal: 'Strength Training',
    progress: 85,
    lastSession: '2024-12-02',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: 4,
    name: 'Sophie Miller',
    age: 29,
    goal: 'Endurance',
    progress: 50,
    lastSession: '2024-12-01',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200'
  }
];

export const groupClasses = [
  { id: 1, name: 'Yoga Flow', trainer: 'Emma Watson', time: '06:00 AM', duration: '60 min', slots: 8, capacity: 15 },
  { id: 2, name: 'HIIT Bootcamp', trainer: 'Mike Trainer', time: '07:00 AM', duration: '45 min', slots: 3, capacity: 20 },
  { id: 3, name: 'Zumba Dance', trainer: 'Maria Garcia', time: '06:00 PM', duration: '60 min', slots: 12, capacity: 25 },
  { id: 4, name: 'Power Cycling', trainer: 'Tom Hardy', time: '07:00 PM', duration: '45 min', slots: 5, capacity: 15 }
];

export const equipment = [
  { id: 1, name: 'Treadmill #1', status: 'Active', lastMaintenance: '2024-11-15', nextMaintenance: '2025-01-15' },
  { id: 2, name: 'Treadmill #2', status: 'Maintenance', lastMaintenance: '2024-11-20', nextMaintenance: '2024-12-20' },
  { id: 3, name: 'Leg Press', status: 'Active', lastMaintenance: '2024-10-30', nextMaintenance: '2024-12-30' },
  { id: 4, name: 'Cable Machine #1', status: 'Active', lastMaintenance: '2024-11-10', nextMaintenance: '2025-01-10' },
  { id: 5, name: 'Rowing Machine', status: 'Active', lastMaintenance: '2024-11-25', nextMaintenance: '2025-01-25' }
];

export const attendanceData = [
  { day: 'Mon', count: 145 },
  { day: 'Tue', count: 132 },
  { day: 'Wed', count: 158 },
  { day: 'Thu', count: 142 },
  { day: 'Fri', count: 167 },
  { day: 'Sat', count: 189 },
  { day: 'Sun', count: 123 }
];
