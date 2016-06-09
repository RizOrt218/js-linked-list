/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */

function linkedListGenerator(){
  var head = null;
  var tail = null;
  var length = 0;

  return {

    //POINTS TO HEAD
    getHead : function(){
      return head;
    },

    //POINTS TO TAIL
    getTail : function(){
      return tail;
    },

    //CREATED NEW NODE ADD TO LINKED LIST
    add : function( value ){

      var newNode = {
        value : value,
        next : null
      };

      if( head === null && tail === null ){
        head = newNode;
        tail = newNode;
      } else {
        tail.next = newNode;
        tail = newNode;
      }
      length++;
      return newNode;
    },

    //GOES THROUGH LINKED LIST AND RETURNS THE NODE
    get : function( index ){
      var start = this.getHead();
      var currentNode = start;
      var position = 0;

      while( position < index ){
        if( currentNode === tail ){
          return false;
        }
        currentNode = currentNode.next;
        position++;
      }
      return currentNode;
    },

    //GOES THROUGH LINKED LIST AND REMOVE DESIRED NODE
    remove : function( index ){
      var curNode = this.get( index );
      var prevNode = this.get( index - 1 );

    //CASES TO WORK WITH
    //if length of linked list is less than index
    //if there is only one node in linked list
    //if index is 0 then assign the head to be index
    //if index is tail. Assign tail to prevNode
    //if index is between head and tail. Have head point to tail.
      if( length <= index ){
        return false;
      }
      if( index === 0 && length === 1 ){
        head = null;
        tail = null;
      } else {
        if( index === 0 ){
          head = curNode.next;
        } else if( index === length - 1 ){
          tail = prevNode;
          prevNode.next = null;
          } else {
            prevNode.next = curNode.next;
        }
      }
      length--;
    },

    //GOES THROUGH OUR LINKED LIST AND INSERT NEW NODE
    insert : function( value, index ){
      var nodeWhereNewNodeWillReplace = this.get( index );
      var prevNode = this.get( index - 1 );
      var tempNode;

      var newNode = {
        value : value,
        next : null
      };

      //if index is greater than length or index is less than 0
      //if index is 0, index becomes head
      //if index is inserted between head and tail, point head to index
        // ... & index.next point to tail
      //if head is tail, & index is 0, index becomes head and head.next is null

      if( index >= length || index < 0 ){
        return false;
      }

    }
  };



}

var linkList = linkedListGenerator();


