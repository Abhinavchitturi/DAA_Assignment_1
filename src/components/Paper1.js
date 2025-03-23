import React from "react";
import { useNavigate } from "react-router-dom";
import "../paper1.css";
import { InlineMath } from "react-katex";
import first from "../Pictures/1st.png"
function Paper1() {
  const navigate = useNavigate();
  return (
    <div className="page">
      <h1 className="main-title">Listing All Maximal Cliques in Sparse Graphs in Near-optimal Time</h1>
      <div className="section">
        <h2 className="section-title">Summary</h2>
        <p className = "summary">
        The paper "Arboricity and Subgraph Listing Algorithms" by Norishige Chiba and Takao Nishizeki (1985) introduces 
        an efficient edge-searching strategy for listing subgraphs such as triangles, quadrangles, complete subgraphs, 
        and cliques. The key innovation is the use of arboricity α(G)\alpha(G)α(G) as a parameter to improve the time 
        complexity of subgraph listing algorithms.
        </p>
        <p>
        Arboricity α(G)\alpha(G) is defined as the minimum number of edge-disjoint spanning forests required 
        to cover all edges of a graph. The authors establish that their algorithms run in O(α(G)m)O(\alpha(G) m)O(α(G)m) 
        time, where m is the number of edges in the graph. Since α(G)\alpha(G) is often much smaller than n (the number of 
        vertices), this leads to significant performance improvements.
        </p>
      </div>
      <div className="section">
        <h2 className="section-title">Pseudocode</h2>
          <img src={first}/>
      </div>
      <div className="section">
        <h2 className="section-title">Observation</h2>
        <table className="output-table">
          <thead>
            <tr>
              <th>Metrics</th>
              <th>Enron Email Dataset</th>
              <th>Wiki-Vote Dataset</th>
              <th>Skitter Dataset</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Largest Clique Size</td>
              <td>20</td>
              <td>17</td>
              <td>67</td>
            </tr>
            <tr>
              <td>Number of Cliques</td>
              <td>226,859</td>
              <td>459,002</td>
              <td>37,322,355</td>
            </tr>
            <tr>
              <td>Execution Time (ms)</td>
              <td>34891</td>
              <td>12476</td>
              <td>33,434,371</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="section">
      <h2 className="section-title">Time Complexity</h2>
      <p className="sum">
        The time complexity results from the Chiba and Nishizeki (1985) paper on
        arboricity and subgraph listing algorithms are:
      </p>
      <ul>
        <li>
          <strong>Triangle Listing:</strong>{" "}
          <InlineMath math="O(a(G) \cdot m)" />, where{" "}
          <InlineMath math="a(G)" /> is the arboricity of the graph and{" "}
          <InlineMath math="m" /> is the number of edges.
        </li>
        <li>
          <strong>Quadrangle (C4) Listing:</strong>{" "}
          <InlineMath math="O(a(G) \cdot m)" />
        </li>
        <li>
          <strong>Complete Subgraph </strong>
          <InlineMath math="K_t" /> <strong>Listing:</strong>{" "}
          <InlineMath math="O(a(G)^{t-2} \cdot m)" />, where{" "}
          <InlineMath math="t" /> is the order of the complete subgraph.
        </li>
        <li>
          <strong>Clique Listing:</strong>{" "}
          <InlineMath math="O(a(G) \cdot m)" /> per clique.
        </li>
      </ul>
      <p className="sum">
        For general graphs, the arboricity is bounded by{" "}
        <InlineMath math="a(G) \leq O(\sqrt{m})" />, leading to a worst-case
        bound of <InlineMath math="O(m^{3/2})" /> for triangle and quadrangle
        listing. However, for planar graphs, <InlineMath math="a(G) \leq 3" />,
        making these algorithms run in linear time <InlineMath math="O(m)" />.
      </p>
    </div>
      <button onClick={() => navigate("/")} className="back-btn">Go Back</button>
    </div>
  );
}

export default Paper1;
