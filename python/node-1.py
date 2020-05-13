class Node:
    def __init__(self,val):
        self.val = val
        self.next = None
        

class SLL:
    def __init__(self):
        self.head = None
    def addFront(self,val):
        newNode = Node(val)
        newNode.next = self.head
        self.head = newNode
        #print(self.head.val)
        return self
    def removeFront(self):
        self.head = self.head.next
        return self
    def addToBack(self,val):
        newNode = Node(val)
        runner = self.head
        while(runner.next != None):
            runner = runner.next
        runner.next = newNode
        #print(runner.next.val)
        return self
    def removeFromBack(self):
        runner = self.head
        while(runner.next.next != None):
            runner = runner.next
        runner.next = None
        return self
    def printList(self):
        if self.head.next == None:
            print(self.head.val)
        else:
            print(self.head.val)
            runner = self.head
            while(runner.next != None):
                print(runner.next.val)
                runner = runner.next
                
        return self

myList = SLL()
myList.addFront(9).addToBack(7).addFront(6).addFront(90).addToBack(72).addFront(16)
print('#'*60)
myList.printList()
print('#'*60)
myList.printList()
