const colours = [
  'White',
  'Black',
  'Grey',
  'Blue',
  'Green',
  'Yellow',
  'Gold',
  'Orange',
  'Brown',
  'Red',
  'Pink',
  'Purple',
  'Silver',
  'Bronze',
]

const adjectives = [
  'Adorable',
  'Adventurous',
  'Aggressive',
  'Amused',
  'Angry',
  'Annoyed',
  'Anxious',
  'Arrogant',
  'Attractive',
  'Beautiful',
  'Bewildered',
  'Bored',
  'Brave',
  'Busy',
  'Calm',
  'Careful',
  'Cautious',
  'Cheerful',
  'Clever',
  'Clumsy',
  'Confused',
  'Courageous',
  'Crazy',
  'Curious',
  'Dangerous',
  'Defiant',
  'Delightful',
  'Depressed',
  'Determined',
  'Dizzy',
  'Doubtful',
  'Dull',
  'Eager',
  'Elated',
  'Elegant',
  'Embarassed',
  'Energetic',
  'Enthusiastic',
  'Egregious',
  'Evil',
  'Famous',
  'Fancy',
  'Fierce',
  'Filthy',
  'Foolish',
  'Frantic',
  'Friendly',
  'Gentle',
  'Glamorous',
  'Grumpy',
  'Handsome',
  'Hilarious',
  'Homeless',
  'Hungry',
  'Innocent',
  'Jittery',
  'Jolly',
  'Kind',
  'Lazy',
  'Lively',
  'Lonely',
  'Mysterious',
  'Naughty',
  'Nervous',
  'Pedantic',
  'Perfect',
  'Poor',
  'Powerful',
  'Pretty',
  'Proud',
  'Puzzled',
  'Selfish',
  'Shy',
  'Sleepy',
  'Sparkling',
  'Tired',
  'Troubled',
  'Ugly',
  'Unusual',
  'Wicked',
  'Worried',
  'Zealous',
  'Exuberant',
  'Wistful',
  'Imaginary',
  'Sceptical',
  'Methodical',
  'Whimsical',
]

const animals = [
  'Lion',
  'Tiger',
  'Bear',
  'Wolf',
  'Dog',
  'Cat',
  'Dragon',
  'Fox',
  'Snake',
  'Elephant',
  'Meercat',
  'Horse',
  'Buffalo',
  'Panda',
  'Pig',
  'Cow',
  'Chicken',
  'Swan',
  'Eagle',
  'Bat',
  'Rhino',
  'Monkey',
  'Parrot',
  'Goat',
  'Shark',
  'Unicorn',
  'Frog',
  'Whale',
  'Kangaroo',
  'Rabbit',
  'Mouse',
  'Armadillo',
  'Dolphin',
  'Duck',
]

export default function generatePassword() {
  const randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)]
  // console.log('adjective', randomAdjective)

  const randomColour = colours[Math.floor(Math.random() * colours.length)]
  // console.log('random number', Math.floor(Math.random() * colours.length))
  // console.log('colour', randomColour)

  const randomAnimal = animals[Math.floor(Math.random() * animals.length)]
  // console.log('animal', randomAnimal)

  const randomNumber = Math.floor(Math.random() * 99)
  const randomTwoDigitNumber =
    randomNumber > 9 ? randomNumber : '0' + randomNumber

  return `${randomAdjective}${randomColour}${randomAnimal}${randomTwoDigitNumber}`
}
