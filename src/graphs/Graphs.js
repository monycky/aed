import Edge from "./Edge";
import Vertex from "./Vertex";

class Graphs {
  constructor(vertexes = [], edges = []) {
    this.vertexes = vertexes;
    this.edges = edges;
  }

  addVertex(key) {
    let vertex = new Vertex(key);
    this.vertexes.push(vertex);
    return vertex;
  }

  addEdge(origin, destiny) {
    let nedge = new Edge(origin, destiny);
    this.edges.push(nedge);
    origin.adjacency.push(nedge);

    let nedge2 = new Edge(origin, destiny);
    destiny.adjacency.push(nedge2);
    return nedge;
  }
  adjacencyList() {
    this.vertexes.forEach(v => v.adjacencyList());
  }

  dfs(vertex) {
    let v;
    this.v = vertex;
    v.vertex.visited = true;
    vertex.ajacency.forEach(edge => {
      if (edge.status == "UNEXPLORED") {
        if (edge.destiny.viseted == false) {
          edge.status = "DISCOVERED";
          dfs(edge.destiny);
        } else {
          edge.status = "RETURN";
        }
      }
    });
  }
}

export default Graphs;
