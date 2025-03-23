import React from "react";
import { useNavigate } from "react-router-dom";
import "../paper2.css";
import { InlineMath } from "react-katex";
import second from "../Pictures/2nd.png"
import seconda from "../Pictures/2a.png"

function Paper2() {
  const navigate = useNavigate();
  return (
    <div className="page">
      <h1 className="main-title">Listing All Maximal Cliques in Sparse Graphs in Near-optimal Time</h1>
      <div className="section">
        <h2 className="section-title">Summary</h2>
        <p className = "summary">
        The paper addresses the problem of <strong>enumerating all maximal cliques</strong> in <strong>sparse graphs</strong> 
        efficiently. A <strong>clique</strong> is a <strong>fully connected subgraph</strong>, and a <strong>maximal clique</strong> 
        is one that <strong>cannot be extended</strong> by adding more vertices. Identifying maximal cliques has applications in 
        <strong>social network analysis, bioinformatics, and data mining.</strong>
        </p>
        <p>
        Traditional approaches, such as the <strong>Bron–Kerbosch algorithm</strong>, provide optimal solutions in terms 
        of the number of maximal cliques but still have <strong>exponential complexity</strong>. This paper introduces an 
        improved algorithm that leverages graph degeneracy to achieve a <strong>near-optimal runtime of O(dn3d/3)</strong>, 
        where d is the <strong>degeneracy</strong> of the graph.
        </p>
        <p>
        By leveraging degeneracy, this approach ensures that the number of recursive calls remains controlled, making 
        it highly effective for graphs where d is small relative to n.
        </p>
      </div>
      <div className="section">
        <h2 className="section-title">Pseudocode</h2>
          <img src={second}/>
          <img src={seconda}/>
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
      <p>
        The complexity of the <strong>Bron-Kerbosch Degeneracy algorithm</strong>{" "}
        depends on the degeneracy of the graph, which limits the number of recursive calls and search depth.
      </p>
      <ul>
        <li>
          <strong>Preprocessing Complexity:</strong>
          <ol>
            Computing the degeneracy ordering takes{" "}
            <InlineMath math="O(n + m)" /> time using bucket sorting.
          </ol>
        </li>
        <li>
          <strong>Recursive Complexity:</strong>
          <ol>
            The Bron–Kerbosch algorithm without pivoting runs in{" "}
            <InlineMath math="O(3^{n/3})" />, which is exponential.
          </ol>
          <ol>
            With pivoting, the worst-case complexity improves to{" "}
            <InlineMath math="O(3^{d/3})" />, where <InlineMath math="d" /> is
            the degeneracy.
          </ol>
          <ol>
            The full BronKerboschDegeneracy algorithm runs in{" "}
            <InlineMath math="O(d \cdot n^{3d/3})" />, which is optimal given
            the worst-case number of maximal cliques in a graph.
          </ol>
        </li>
      </ul>
      <p className="sum">Thus, for sparse graphs (low ), the algorithm achieves near-linear performance, while for dense 
        graphs, it remains exponential but optimally so.</p>
    </div>
      <button onClick={() => navigate("/")} className="back-btn">Go Back</button>
    </div>
  );
}

export default Paper2;
