import React from "react";

export default function Dot(props) {
  // All the number for which {index} is black on a die face.
  const checkDots = [
    [2, 3, 4, 5, 6],
    [],
    [4, 5, 6],
    [6],
    [1, 3, 5],
    [6],
    [4, 5, 6],
    [],
    [2, 3, 4, 5, 6],
  ];

  const [d1, d2, d3, d4, d5, d6, d7, d8, d9] = checkDots.map((item) => {
    return { backgroundColor: item.includes(props.number) ? "black" : "" };
  });

  return (
    <table>
      <tbody>
        <tr>
          <td style={d1}></td>
          <td style={d2}></td>
          <td style={d3}></td>
        </tr>
        <tr>
          <td style={d4}></td>
          <td style={d5}></td>
          <td style={d6}></td>
        </tr>
        <tr>
          <td style={d7}></td>
          <td style={d8}></td>
          <td style={d9}></td>
        </tr>
      </tbody>
    </table>
  );
}
