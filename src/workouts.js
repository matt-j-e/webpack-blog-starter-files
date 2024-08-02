const workouts = [
  {
    name: '0A Movement',
    exercises: [
      {name: 'March', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Arm Swing', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Chi Squat', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Wrist Rolls', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Lateral Lunge', work: 60, rest: 20, phase: 'warmup'},
      {name: 'March', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Arm Swing', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Chi Squat', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Wrist Rolls', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Lateral Lunge', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Hinge to Monkey Rock', work: 60, rest: 30, phase: 'workset'},
      {name: 'Cross Body Punch', work: 60, rest: 30, phase: 'workset'},
      {name: 'ISO Cat', work: 60, rest: 30, phase: 'workset'},
      {name: 'Crab Booty Scoot', work: 60, rest: 30, phase: 'workset'},
      {name: 'Hinge to Monkey Rock', work: 60, rest: 30, phase: 'workset'},
      {name: 'Cross Body Punch', work: 60, rest: 30, phase: 'workset'},
      {name: 'ISO Cat', work: 60, rest: 30, phase: 'workset'},
      {name: 'Crab Booty Scoot', work: 60, rest: 30, phase: 'workset'},
      {name: 'Hinge to Monkey Rock', work: 60, rest: 30, phase: 'workset'},
      {name: 'Cross Body Punch', work: 60, rest: 30, phase: 'workset'},
      {name: 'ISO Cat', work: 60, rest: 30, phase: 'workset'},
      {name: 'Crab Booty Scoot', work: 60, rest: 30, phase: 'workset'},
      {name: 'Cross Crawl March', work: 45, rest: 30, phase: 'finisher'},
      {name: 'Glute Bridge', work: 45, rest: 30, phase: 'finisher'},
      {name: 'Cross Crawl March', work: 45, rest: 30, phase: 'finisher'},
      {name: 'Glute Bridge', work: 45, rest: 30, phase: 'finisher'},
      {name: 'Kneeling Spinal Wave', work: 120, rest: 0, phase: 'cooldown'},
    ]
  },
  {
    name: '1A Movement',
    exercises: [
      {name: 'Sliding Hinge', work: 60, rest: 20, phase: 'warmup'},
      {name: 'OH Arm Circles', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Martial Bounce', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Wrist Figure 8s', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Diagonal Monkey Rock', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Sliding Hinge', work: 60, rest: 20, phase: 'warmup'},
      {name: 'OH Arm Circles', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Martial Bounce', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Wrist Figure 8s', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Diagonal Monkey Rock', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Cat Crawl', work: 60, rest: 30, phase: 'workset'},
      {name: 'Open Lunge', work: 60, rest: 30, phase: 'workset'},
      {name: 'Lateral Monkey', work: 60, rest: 30, phase: 'workset'},
      {name: 'ISO Skydiver', work: 60, rest: 30, phase: 'workset'},
      {name: 'Cat Crawl', work: 60, rest: 30, phase: 'workset'},
      {name: 'Open Lunge', work: 60, rest: 30, phase: 'workset'},
      {name: 'Lateral Monkey', work: 60, rest: 30, phase: 'workset'},
      {name: 'ISO Skydiver', work: 60, rest: 30, phase: 'workset'},
      {name: 'Cat Crawl', work: 60, rest: 30, phase: 'workset'},
      {name: 'Open Lunge', work: 60, rest: 30, phase: 'workset'},
      {name: 'Lateral Monkey', work: 60, rest: 30, phase: 'workset'},
      {name: 'ISO Skydiver', work: 60, rest: 30, phase: 'workset'},
      {name: 'Cat Rock', work: 45, rest: 30, phase: 'finisher'},
      {name: 'ISO Starfish', work: 45, rest: 30, phase: 'finisher'},
      {name: 'Cat Rock', work: 45, rest: 30, phase: 'finisher'},
      {name: 'ISO Starfish', work: 45, rest: 30, phase: 'finisher'},
      {name: 'Egg Roll', work: 45, rest: 30, phase: 'cooldown'},
      {name: 'Egg Roll', work: 45, rest: 0, phase: 'cooldown'},
    ]
  },
  {
    name: '1A Recovery',
    exercises: [
      {name: 'Bounce', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Chi Squat', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Sword Sharpening', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Neck Figure 8', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Rotational Arm Swing', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Bounce', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Chi Squat', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Sword Sharpening', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Neck Figure 8', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Rotational Arm Swing', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Kneeling Front Step', work: 60, rest: 30, phase: 'workset'},
      {name: 'Pelvic Figure 8', work: 60, rest: 30, phase: 'workset'},
      {name: 'Wrist Flexion Pushup', work: 60, rest: 30, phase: 'workset'},
      {name: 'Glute Bridge + OH Reach', work: 60, rest: 30, phase: 'workset'},
      {name: 'Kneeling Front Step', work: 60, rest: 30, phase: 'workset'},
      {name: 'Pelvic Figure 8', work: 60, rest: 30, phase: 'workset'},
      {name: 'Wrist Flexion Pushup', work: 60, rest: 30, phase: 'workset'},
      {name: 'Glute Bridge + OH Reach', work: 60, rest: 30, phase: 'workset'},
      {name: 'Kneeling Front Step', work: 60, rest: 30, phase: 'workset'},
      {name: 'Pelvic Figure 8', work: 60, rest: 30, phase: 'workset'},
      {name: 'Wrist Flexion Pushup', work: 60, rest: 30, phase: 'workset'},
      {name: 'Glute Bridge + OH Reach', work: 60, rest: 30, phase: 'workset'},
      {name: 'Kneeling Spinal Wave', work: 120, rest: 30, phase: 'cooldown'},
      {name: 'Supine Decompression', work: 120, rest: 0, phase: 'cooldown'},
    ]
  },
  {
    name: '1B Movement',
    exercises: [
      {name: 'March + Balance (every 3 steps)', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Alternating Arm Swing', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Magnetic Wrists', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Hinge to Monkey Rock', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Lateral Lunge', work: 60, rest: 20, phase: 'warmup'},
      {name: 'March + Balance (every 3 steps)', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Alternating Arm Swing', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Magnetic Wrists', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Hinge to Monkey Rock', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Lateral Lunge', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Crab March', work: 60, rest: 30, phase: 'workset'},
      {name: 'Ginga', work: 60, rest: 30, phase: 'workset'},
      {name: 'Underswitch', work: 60, rest: 30, phase: 'workset'},
      {name: 'Forward Monkey + Squat', work: 60, rest: 30, phase: 'workset'},
      {name: 'Crab March', work: 60, rest: 30, phase: 'workset'},
      {name: 'Ginga', work: 60, rest: 30, phase: 'workset'},
      {name: 'Underswitch', work: 60, rest: 30, phase: 'workset'},
      {name: 'Forward Monkey + Squat', work: 60, rest: 30, phase: 'workset'},
      {name: 'Crab March', work: 60, rest: 30, phase: 'workset'},
      {name: 'Ginga', work: 60, rest: 30, phase: 'workset'},
      {name: 'Underswitch', work: 60, rest: 30, phase: 'workset'},
      {name: 'Forward Monkey + Squat', work: 60, rest: 30, phase: 'workset'},
      {name: 'Starfish Crunch', work: 45, rest: 30, phase: 'finisher'},
      {name: 'Cross Crawl March', work: 45, rest: 30, phase: 'finisher'},
      {name: 'Cat Rock + Knee Drive', work: 45, rest: 30, phase: 'finisher'},
      {name: 'Starfish Crunch', work: 45, rest: 30, phase: 'finisher'},
      {name: 'Cross Crawl March', work: 45, rest: 30, phase: 'finisher'},
      {name: 'Cat Rock + Knee Drive', work: 45, rest: 30, phase: 'finisher'},
      {name: 'Glute Bridge + OH Reach', work: 120, rest: 0, phase: 'cooldown'},
    ]
  },
  {
    name: '1B Recovery',
    exercises: [
      {name: 'Chi Breath', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Grounded Cat Rock', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Horse Stance Squat', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Wrist Deviation Fists', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Chi Breath', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Grounded Cat Rock', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Horse Stance Squat', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Wrist Deviation Fists', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Woodchop', work: 60, rest: 30, phase: 'workset'},
      {name: 'Floor Scorpion Roll', work: 60, rest: 30, phase: 'workset'},
      {name: 'Extended Mountain Climber w/ Lizard Reach', work: 60, rest: 30, phase: 'workset'},
      {name: 'Back Roll', work: 60, rest: 30, phase: 'workset'},
      {name: 'Woodchop', work: 60, rest: 30, phase: 'workset'},
      {name: 'Floor Scorpion Roll', work: 60, rest: 30, phase: 'workset'},
      {name: 'Extended Mountain Climber w/ Lizard Reach', work: 60, rest: 30, phase: 'workset'},
      {name: 'Back Roll', work: 60, rest: 30, phase: 'workset'},
      {name: 'Woodchop', work: 60, rest: 30, phase: 'workset'},
      {name: 'Floor Scorpion Roll', work: 60, rest: 30, phase: 'workset'},
      {name: 'Extended Mountain Climber w/ Lizard Reach', work: 60, rest: 30, phase: 'workset'},
      {name: 'Back Roll', work: 60, rest: 30, phase: 'workset'},
      {name: 'Shinbox Tripod Extension', work: 120, rest: 30, phase: 'finisher'},
      {name: 'Climber March', work: 120, rest: 0, phase: 'finisher'},
    ]
  },
  {
    name: '1C Movement',
    exercises: [
      {name: 'External Rotation March', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Arm Circles', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Cross Body Punch', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Bear Squat', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Strong Hands', work: 60, rest: 20, phase: 'warmup'},
      {name: 'External Rotation March', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Arm Circles', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Cross Body Punch', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Bear Squat', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Strong Hands', work: 60, rest: 20, phase: 'warmup'},
      {name: 'Side Kick Through', work: 60, rest: 30, phase: 'workset'},
      {name: 'Front Step', work: 60, rest: 30, phase: 'workset'},
      {name: 'Cowboy Squat', work: 60, rest: 30, phase: 'workset'},
      {name: 'Crab Crawl', work: 60, rest: 30, phase: 'workset'},
      {name: 'Side Kick Through', work: 60, rest: 30, phase: 'workset'},
      {name: 'Front Step', work: 60, rest: 30, phase: 'workset'},
      {name: 'Cowboy Squat', work: 60, rest: 30, phase: 'workset'},
      {name: 'Crab Crawl', work: 60, rest: 30, phase: 'workset'},
      {name: 'Side Kick Through', work: 60, rest: 30, phase: 'workset'},
      {name: 'Front Step', work: 60, rest: 30, phase: 'workset'},
      {name: 'Cowboy Squat', work: 60, rest: 30, phase: 'workset'},
      {name: 'Crab Crawl', work: 60, rest: 30, phase: 'workset'},
      {name: 'Skydiver Reach & Pull', work: 45, rest: 30, phase: 'finisher'},
      {name: 'Starfish Crunch', work: 45, rest: 30, phase: 'finisher'},
      {name: 'Crab Table Top', work: 45, rest: 30, phase: 'finisher'},
      {name: 'Skydiver Reach & Pull', work: 45, rest: 30, phase: 'finisher'},
      {name: 'Starfish Crunch', work: 45, rest: 30, phase: 'finisher'},
      {name: 'Crab Table Top', work: 45, rest: 30, phase: 'finisher'},
      {name: 'Happy Baby', work: 120, rest: 0, phase: 'cooldown'},
    ]
  },
]
