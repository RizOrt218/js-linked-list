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

    module.remove = function( index ){
      var curNode = this.get( index );
      var prevNode = this.get( index - 1 );

      prevNode.next = curNode.next;

      var count = 0;

      while(start.next !== null){ //|| (start === tail)){
        count += 1;
        start = start.next;
        console.log("This is the start",start);
      } //Should return false if index is outside of length
      var listLength = count;
      console.log("listLength",listLength);
      if(listLength <= index){
        return false;
      }

      // var getNode = linkList.get(index);
      // console.log("IM A FUNCTION",linkList.get());
      // var prevNode = linkList.get(index);
      // console.log("herrrooooo", prevNode);
      // prevNode = tail;
      // console.log(prevNode);

    };

    module.get = function( index ){
      var start = head;
      var position = 0;
      while( position < index ){
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


