// Undirected graph using adjacency list
class Graph {
	private adjacencyList: { [key: string]: string[] };
	private numberOfNodes: number;

	constructor() {
		this.adjacencyList = {};
		this.numberOfNodes = 0;
	}

	length() {
		return this.numberOfNodes;
	}

	addVertex(node: string) {
		if (!this.adjacencyList[node]) {
			this.adjacencyList[node] = [];
			this.numberOfNodes++;
		}
	}

	addEdge(node1: string, node2: string) {
		if (this.adjacencyList[node1] && this.adjacencyList[node2]) {
			this.adjacencyList[node1].push(node2);
			this.adjacencyList[node2].push(node1);
		}
	}

	removeEdge(node1: string, node2: string) {
		if (this.adjacencyList[node1] && this.adjacencyList[node2]) {
			this.adjacencyList[node1] = this.adjacencyList[node1].filter(
				(val) => val !== node2
			);

			this.adjacencyList[node2] = this.adjacencyList[node2].filter(
				(val) => val !== node1
			);
		}
	}

	removeVertex(node: string) {
		while (this.adjacencyList[node].length) {
			const removeVertex = this.adjacencyList[node].pop();
			this.removeEdge(node, removeVertex!);
		}
		delete this.adjacencyList[node];
		this.numberOfNodes--;
	}
}

const graph = new Graph();
/**
 * adding 3 varices
 */
graph.addVertex('Tokyo'); // => Tokyo: []
graph.addVertex('KL'); // => KL: []
graph.addVertex('Bali'); // => Bali: []
graph.addVertex('LA'); // => Bali: []

/**
 * make connections between theme
 */
graph.addEdge('Tokyo', 'KL'); // => Tokyo: ['KL', 'Bali']
graph.addEdge('KL', 'Bali'); // => KL: ['Tokyo', 'Bali']
graph.addEdge('LA', 'Bali'); // => LA: ['Bali', 'KL']
graph.addEdge('Bali', 'Tokyo'); // => Bali: ['KL', 'LA', 'Tokyo]
graph.addEdge('KL', 'LA'); // => KL: ['Tokyo', 'Bali', 'LA']
/**
 * remove the connection, since its undirected the connection will be removed from both nodes
 */
graph.removeEdge('KL', 'Bali'); // => KL: ['Tokyo', 'LA'] => // => Bali: ['LA', 'Tokyo]
graph.removeEdge('Tokyo', 'KL'); // => Tokyo: ['Bali'] => // => KL: ['Bali', 'LA']
/**
 * removing vertex means remove every single connection  with other vertex
 */
graph.removeVertex('KL');
console.log(graph);
