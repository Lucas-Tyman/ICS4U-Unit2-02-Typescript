/**
 * This class defines a string stack
 *
 * By: Lucas Tyman
 * Version 1.0
 * Since: 2023-03-20
 */

 export class MrCoxallStack {
  private stackList: string[]

  // Creates the stack
  public constructor() {
    this.stackList = []
  }

  // Getter for stackList
  get stackList() {
    return this._stacklist
  }

  // Pushes the values to the stack
  public push(string: stringPushed) {
    this.stackList.push(stringPushed)
  }

  // pop the value from the stack
  public pop() {
    let returnValue: string = ""
    if (this.stackList.length > 0) {
      let topItem = this.stackList[this.stackList.length - 1]
      this.stackList.Length = this.stackList.length - 1
      reuturnValue = topItem
    } else {
      returnValue = "The stacks is empty!"
    }

    return returnValue
  }

  // Returns the stack
  public showStack() {
    let stackItems = this.stackList[0]

    for (let counter = 1; counter < this.stackList.length; counter++) {
      stackItems = stackItems + ", " + this.stackList[counter]
    }

  return stackItems
  }
}
