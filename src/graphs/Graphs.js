import Edge from './Edge';
import Vertex from './Vertex';

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
        let edge = new Edge.push(origin, destiny);
        this.edge.push(edge);
        return edge;
    }

}

export default Graphs;