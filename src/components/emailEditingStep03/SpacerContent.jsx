import React, { useState } from 'react';
import styled from 'styled-components';

// export default function SpaceContent() {
//   const [spaceStyle, setSpaceStyle] = useState({ height: '50px' });

//   return (
//     <tr>
//       <td align="center" valign="top">
//         <table
//           border="0"
//           cellPadding="0"
//           cellSpacing="0"
//           width="100%"
//           id="emailBody"
//         >
//           <tr>
//             <td align="center" valign="top">
//               <div style={spaceStyle} />
//             </td>
//           </tr>
//         </table>
//       </td>
//     </tr>
//   );
// }
// const Space = styled.div`
// &:hover {
//   outline: 2px solid #ffdf2b;
// }

// &:focus {
//   outline: 2px solid #ffdf2b;
// }
// `;

export default function SpacerContent({ boxStyle }) {
  // const [spaceStyle, setSpaceStyle] = useState({ height: '50px' });
  return <div style={boxStyle} />;
}
