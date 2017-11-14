class Vertex {
  constructor(key, viseted = false, adjacency = []) {
    this.key = key;
    this.viseted = viseted;
    this.adjacency = adjacency;
  }

  adjacencyList() {
    let list = this.key;
    this.adjacency.forEach(edge => (list += " ->" + edge.destiny.key));
    console.log(list);
  }
}

export default Vertex;
