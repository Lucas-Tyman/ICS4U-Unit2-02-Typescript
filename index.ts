/**
 *This program uses a class to list the stack
 *
 * By: Lucas Tyman
 * Verison 1.0
 * Since: 2024-03-20
 */

 import { MrCoxallStack } from './MrCoxallStack'

  // Uses MrCoxallStack
  const fruitStack = new MrCoxallStack()
  fruitStack.push("apple")
  fruitStack.push("banana")
  fruitStack.push("cherry")

  const topFruit =fruitStack.pop()

  // Shows the popped item and new list
  console.log("Pop fruit items: ", topFruit)
  console.log("Fruit items: ", fruitStack.showStack()
  console.log()

  const colourStack = new MrCoxallStack()
  colourStack.push("red")
  colourStack.push("green")
  colourStack.push("blue")

  const topColour = colourStack.pop()

  // shows the popped item and nwe item
  console.log("Pop colour item: ", topColour)
  console.log("Colour items: ", colourStack.showStack())
  console.log()

  const catStack = new MrCoxallStack()
  catStack.push("Calico")
  catStack.push("Siamese")
  catStack.push("Ginger")

  const topCat = catStack.pop()

  // Shows popped item and new list
  console.log ("Pop dog item: ", topCat)
  console.log("Cat items: ", catStack.showStack())
  console.log()

  // Show the fruit stack
  const fruitStackItems = fruitStack.showStack()
  console.log("Fruit items:", fruitStackItems)

  // Shows the colour stack
  const colourStackItems = colourStack.showStack()
  console.log("Colour items:", colourStackItems)

  // Shows the cat stack
  const catStackItems = catStack.showStack()
  console.log("Cat items:", catStackItems)

console.log('\nDone.')
