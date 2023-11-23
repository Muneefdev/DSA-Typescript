// Undirected graph using adjacency list
class Graph {
	adjacencyList: { [key: string]: string[] };
	numberOfNodes: number;

	constructor() {
		this.adjacencyList = {};
		this.numberOfNodes = 0;
	}

	addVertex(node: string) {
		if (!this.adjacencyList[node]) {
			this.adjacencyList[node] = [];
			this.numberOfNodes++;
		}
	}

	addEdge(node1: string, node2: string) {
		this.adjacencyList[node1].push(node2);
		this.adjacencyList[node2].push(node1);
	}
}
