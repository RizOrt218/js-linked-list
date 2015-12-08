/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  var head = null;
  var tail = null;

  return {
    getHead : function(){
      return head;
    },
    getTail : function(){
      return tail;
    },
    add : function(value){
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

    },
    remove : function(thisNode){
      var start = head;
      var count = 0;

      while(start.next !== null || (start === tail)){
        count = count + 1;
        start = start.next;

      } //Should return false if position is outside of length
      var listLength = count;
      if(listLength < thisNode){
        return false;
      }

      var i = 0;
      while(i < thisNode){
        if(start === tail){
          return false;
        }
        start = start.next;
        i++;
      }
      var prevNode = start(1)-1;
      console.log("HELLOOO",prevNode);
        prevNode.next = start;

    },
    get : function(position){
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
    },
    insert : function(){}
  };



}

//var linkList = linkedListGenerator();


