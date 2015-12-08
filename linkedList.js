/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */

function linkedListGenerator(){
  var head = null;
  var tail = null;
  var module = {};

    module.getHead = function(){
      return head;
    };

    module.getTail =function(){
      return tail;
    };

    module.add = function(value){
      var newNode = {
        value : value,
        next : null
      };

      if(head === null && tail === null){
        head = newNode;
        tail = newNode;
      } else {
        tail.next = newNode;
        tail = newNode;
      }

      return newNode;

    };

    module.remove = function(position){
      var count = 0;

      while(start.next !== null){ //|| (start === tail)){
        count += 1;
        start = start.next;
        console.log("This is the start",start);
      } //Should return false if position is outside of length
      var listLength = count;
      console.log("listLength",listLength);
      if(listLength <= position){
        return false;
      }

      var getNode = linkList.get(position);
      console.log("IM A FUNCTION",linkList.get());
      var prevNode = linkList.get(position);
      console.log("herrrooooo", prevNode);
      prevNode = tail;
      console.log(prevNode);

    };

    module.get = function(position){
      var start = head;
      var i = 0;
      while(i < position){
        if(start === tail){
          return false;
        }
        start = start.next;
        i++;

      }
      return start;
    };

    module.insert = function(){};

  return module;
}

var linkList = linkedListGenerator();


