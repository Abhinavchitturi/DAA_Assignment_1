import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../paper3.css"; // Import the CSS file
import third from "../Pictures/3rd.png"

function Paper3() {
  const navigate = useNavigate();
  return (
    <div className="page">
      <h1 className="main-title">The Worst-Case Time Complexity for Generating All Maximal Cliques and Computational Experiments</h1>

      {/* Summary Section */}
      <div className="section">
        <h2 className="section-title">Summary</h2>
        <p className = "summary">
        The paper addresses the problem of generating all maximal cliques in an undirected graph. A clique is a fully connected 
        subgraph, meaning every pair of vertices within it is adjacent. A maximal clique is a clique that cannot be extended by 
        adding more vertices. Finding all maximal cliques has important applications in clustering, bioinformatics, social network 
        analysis, and combinatorial optimization.
        </p>
        <p>
        The authors present a depth-first search (DFS) algorithm for maximal clique enumeration, which improves upon the 
        Bron–Kerbosch algorithm. The problem of finding maximal cliques is a fundamental challenge in graph theory, 
        with numerous real-world applications. Since a clique is a subset of vertices where every pair of nodes is connected, 
        identifying all maximal cliques helps in understanding complex network structures and relationships.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Pseudocode</h2>
          <img src={third}/>
      </div>

      {/* Output Section */}
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
              <td>20</td>
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
              <td>11,135</td>
              <td>13,135</td>
              <td>23,352,000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="section">
        <h2 className="section-title">Time Complexity</h2>
        <li><strong>Worst-case time complexity:</strong> O(3ⁿ/³) for a graph with n vertices.</li>
        <li><strong>Space complexity:</strong>  Optimized using a <strong>tree-based output format</strong>, requiring 
        significantly <strong>less memory</strong> than direct clique listing algorithms.
        </li>
      </div>
      <button onClick={() => navigate("/")} className="back-btn">Go Back</button>
    </div>
  );
}

export default Paper3;