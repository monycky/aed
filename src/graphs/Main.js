import Graphs from './Graphs';
class Main {
    constructor() {
        let g = new Graph();

        let v0 = g.addVertex("v0");
        let v1 = g.addVertex("v1");
        let v2 = g.addVertex("v2");
        let v3 = g.addVertex("v3");
        let v4 = g.addVertex("v4");
        let v5 = g.addVertex("v5");

        let e1 = g.addEdge(v0, v1);
        let e1 = g.addEdge(v1, v2);
        let e1 = g.addEdge(v2, v2);
        let e1 = g.addEdge(v2, v3);
        let e1 = g.addEdge(v0, v3);
        let e1 = g.addEdge(v5, v4);
        let e1 = g.addEdge(v4, v1);
    }
}