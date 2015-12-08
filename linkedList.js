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
    remove : function(){},
    get : function(){},
    insert : function(){}
  };


}


