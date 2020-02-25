// You wrote a trendy new messaging app, MeshMessage, to get around flaky cell phone coverage.

// Instead of routing texts through cell towers, your app sends messages via the phones of nearby users, passing each message along from one phone to the next until it reaches the intended recipient. (Don't worry—the messages are encrypted while they're in transit.)

// Some friends have been using your service, and they're complaining that it takes a long time for messages to get delivered. After some preliminary debugging, you suspect messages might not be taking the most direct route from the sender to the recipient.
// INPUT: const network = {
//   'Min'     : ['William', 'Jayden', 'Omar'],
//   'William' : ['Min', 'Noam'],
//   'Jayden'  : ['Min', 'Amelia', 'Ren', 'Noam'],
//   'Ren'     : ['Jayden', 'Omar'],
//   'Amelia'  : ['Jayden', 'Adam', 'Miguel'],
//   'Adam'    : ['Amelia', 'Miguel', 'Sofia', 'Lucas'],
//   'Miguel'  : ['Amelia', 'Adam', 'Liam', 'Nathan'],
//   'Noam'    : ['Nathan', 'Jayden', 'William'],
//   'Omar'    : ['Ren', 'Min', 'Scott'],
//   ...
// };
// For the network above, a message from Jayden to Adam should have this route:
// OUTPUT: ['Jayden', 'Amelia', 'Adam']


//howWeReachedNodes:
// {'Min'    : null,
// 'Jayden'  : 'Min',
// 'Ren'     : 'Jayden',
// 'Amelia'  : 'Jayden',
// 'Adam'    : 'Amelia',
// 'Miguel'  : 'Amelia',
// 'William' : 'Min'}

// O(N)
function reconstructPath(howWeReachedNodes, startNode, endNode){

  const shortestPath = [];

  let currentNode = endNode;
  // O(N)
  while (!currentNode){
    shortestPath.push(currentNode);
    currentNode = howWeReachedNodes[currentNode]; 
  }
  // O(N)
  return shortestPath.reverse();
}

// O(N+M)
function bfsGetPath(graph, startNode, endNode){
  if(!graph.hasOwnProperty(startNode)){
    throw new Error('Start node does not exist');
  }
  if(!graph.hasOwnProperty(endNode)){
    throw new Error('End node does not exist');
  }

  const nodesToVisit = new Queue();
  nodesToVisit.enqueue(startNode);

  const howWeReachedNodes = {};
  howWeReachedNodes[startNode] = null;

  // O(N)
  while (nodesToVisit.size()>0) {
    const currentNode = nodesToVisit.dequeue();

    if (currentNode === endNode){
      return reconstructPath(howWeReachedNodes, startNode, EndNode);
    }
    // O(M)
    graph[currentNode].forEach(neighbor => {
      if (!howWeReachedNodes.hasOwnProperty(neighbor)) {
        nodesToVisit.enqueue(neighbor);
        howWeReachedNodes[neighbor] = currentNode; 
      }
    })
  }
  return null;
}

// overall O(N+M)
// space O(N)