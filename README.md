<div align="center">
<div align="center">
  <img src="https://user-images.githubusercontent.com/74038190/213866269-5d00981c-7c98-46d7-8a8e-16f462f15227.gif" width="200" />
  <img src="https://user-images.githubusercontent.com/74038190/213866269-5d00981c-7c98-46d7-8a8e-16f462f15227.gif" width="200" />
  <img src="https://user-images.githubusercontent.com/74038190/213866269-5d00981c-7c98-46d7-8a8e-16f462f15227.gif" width="200" />
</div>
 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Currency Converter Project CS2004 - README</title>
  <style>
    /* Base styling */
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 0;
      padding: 20px;
      background-color: #f6f8fa;
      color: #24292e;
    }
    h1, h2, h3 {
      color: #0366d6;
    }
    p {
      margin-bottom: 1em;
    }
    hr {
      border: none;
      border-top: 1px solid #d1d5da;
      margin: 20px 0;
    }

    /* Table styling */
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 20px;
    }
    table th, table td {
      border: 1px solid #d1d5da;
      padding: 8px;
      vertical-align: top;
    }
    table th {
      background-color: #f6f8fa;
      font-weight: bold;
    }
    pre {
      background-color: #f6f8fa;
      border: 1px solid #d1d5da;
      padding: 10px;
      overflow-x: auto;
      white-space: pre-wrap;
    }
    code {
      font-family: Consolas, 'Courier New', monospace;
      background-color: #f6f8fa;
      padding: 2px 4px;
    }
    a {
      color: #0366d6;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>

  <h1>Currency Converter Project CS2004</h1>
  <p>
    A responsive, modern currency converter web application developed as part of the CS2004 course on Agile Software Engineering and DevOps.
    This project demonstrates real-time currency conversion by integrating with ExchangeRate-API and features animated backgrounds,
    multi-page navigation, and modern design elements.
  </p>

  <hr>

  <h2>Overview in Table Format</h2>
  <table>
    <tr>
      <th>Section</th>
      <th>Details</th>
    </tr>
    <tr>
      <td><strong>Project Name</strong></td>
      <td>Currency Converter Project CS2004</td>
    </tr>
    <tr>
      <td><strong>Description</strong></td>
      <td>
        A responsive currency converter that uses ExchangeRate-API for real-time conversion,
        featuring an animated UI, smooth transitions, and multi-page navigation.
      </td>
    </tr>
    <tr>
      <td><strong>Features</strong></td>
      <td>
        - Real-Time Conversion<br>
        - Responsive Design<br>
        - Animated Gradient Background<br>
        - Multi-Page Navigation<br>
        - Theme and Notification Settings<br>
        - Conversion History<br>
        - Team Member Modal
      </td>
    </tr>
    <tr>
      <td><strong>Technologies</strong></td>
      <td>
        HTML5, CSS3, JavaScript (ES6), 
        <a href="https://www.exchangerate-api.com/" target="_blank">ExchangeRate-API</a>
      </td>
    </tr>
    <tr>
      <td><strong>Project Structure</strong></td>
      <td>
        <pre>
Currency-Converter-CS2004/
├── index.html         (Main HTML File)
├── styles.css         (CSS Styles)
├── script.js          (JavaScript Functionality)
└── README.md          (Project Documentation)
        </pre>
      </td>
    </tr>
    <tr>
      <td><strong>Installation</strong></td>
      <td>
        1. Clone the repository:<br>
        <code>git clone https://github.com/yourusername/Currency-Converter-CS2004.git</code><br><br>
        2. Navigate into the project directory:<br>
        <code>cd Currency-Converter-CS2004</code>
      </td>
    </tr>
    <tr>
      <td><strong>Usage</strong></td>
      <td>
        1. Open <code>index.html</code> in your browser or use a local development server (e.g., via VS Code Live Server).<br>
        2. Enter an amount and select currencies to convert.<br>
        3. Use the bottom navigation bar to switch pages.
      </td>
    </tr>
    <tr>
      <td><strong>Customization</strong></td>
      <td>
        - Modify <code>styles.css</code> to adjust the design and animations.<br>
        - Update API integration in <code>script.js</code> if you wish to change or extend currency conversion features.
      </td>
    </tr>
    <tr>
      <td><strong>Contributing</strong></td>
      <td>
        Contributions are welcome! Fork the repository, create a feature branch, and submit a pull request.
      </td>
    </tr>
    <tr>
      <td><strong>License</strong></td>
      <td>
        MIT License (see the <a href="LICENSE">LICENSE</a> file for details)
      </td>
    </tr>
    <tr>
      <td><strong>Acknowledgements</strong></td>
      <td>
        - Thanks to the CS2004 course instructors and peers.<br>
        - <a href="https://www.exchangerate-api.com/" target="_blank">ExchangeRate-API</a> for providing accessible currency data.
      </td>
    </tr>
  </table>

  <hr>

  <h2>Detailed Sections</h2>

  <h3>Features</h3>
  <ul>
    <li><strong>Real-Time Conversion:</strong> Convert amounts between multiple currencies using live exchange rate data from ExchangeRate-API.</li>
    <li><strong>Responsive Design:</strong> The layout adapts to various screen sizes (desktop, tablet, mobile).</li>
    <li><strong>Animated Background:</strong> A gradient animation and smooth UI transitions offer a modern look.</li>
    <li><strong>Navigation:</strong> A fixed bottom navigation bar helps users switch between pages (Home, Converter, History, Settings, About).</li>
    <li><strong>User Interactions:</strong> Toggle themes (dark/light), enable notifications, and interact with team member modals.</li>
    <li><strong>Conversion History:</strong> Each conversion is recorded and viewable in the History section.</li>
  </ul>

  <h3>Technologies</h3>
  <ul>
    <li><strong>HTML5:</strong> For markup and structure.</li>
    <li><strong>CSS3:</strong> For styling, layout, animations, and responsiveness.</li>
    <li><strong>JavaScript (ES6):</strong> For interactivity, API calls, and dynamic content.</li>
    <li><strong>ExchangeRate-API:</strong> Provides the live currency conversion data.</li>
  </ul>

  <h3>Project Structure</h3>
  <pre>
Currency-Converter-CS2004/
├── index.html         # Main HTML file with markup
├── styles.css         # External CSS for styling and animations
├── script.js          # JavaScript for functionality (navigation, conversion, settings)
├── README.md          # This documentation file
└── assets/            # (Optional) Folder for images, fonts, etc.
  </pre>

  <h3>Installation & Setup</h3>
  <ol>
    <li>
      <strong>Clone the Repository:</strong>
      <pre>git clone https://github.com/yourusername/Currency-Converter-CS2004.git</pre>
    </li>
    <li>
      <strong>Navigate into the project directory:</strong>
      <pre>cd Currency-Converter-CS2004</pre>
    </li>
    <li>
      <strong>Run the Project:</strong> Open <code>index.html</code> directly in your browser or use a local development server (e.g., <a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer" target="_blank">Live Server for VS Code</a>).
    </li>
  </ol>

  <h3>Usage Instructions</h3>
  <ol>
    <li>
      <strong>Conversion:</strong>
      <ul>
        <li>Enter the amount you want to convert.</li>
        <li>Select the "from" and "to" currencies.</li>
        <li>Click the swap button to switch currencies if needed.</li>
        <li>Click <strong>Convert</strong> to see the converted amount along with the conversion history update.</li>
      </ul>
    </li>
    <li>
      <strong>Navigation:</strong>
      <ul>
        <li>Use the navigation bar at the bottom to switch between Home, Converter, History, Settings, and About pages.</li>
      </ul>
    </li>
    <li>
      <strong>Settings:</strong>
      <ul>
        <li>Toggle themes (dark/light).</li>
        <li>Enable/disable notifications, sound, and vibrations.</li>
        <li>Clear conversion history.</li>
      </ul>
    </li>
    <li>
      <strong>Team Member Details:</strong>
      <ul>
        <li>Click on any team member's card on the Home page to view their details in a modal popup.</li>
      </ul>
    </li>
  </ol>

  <h3>Contributing</h3>
  <p>Feel free to contribute! Follow these steps:</p>
  <ol>
    <li>Fork the repository.</li>
    <li>Create a new branch: <code>git checkout -b feature/my-feature</code></li>
    <li>Commit your changes: <code>git commit -m 'Add new feature'</code></li>
    <li>Push to your branch: <code>git push origin feature/my-feature</code></li>
    <li>Open a Pull Request.</li>
  </ol>

  <h3>License</h3>
  <p>This project is licensed under the MIT License. See the <a href="LICENSE" target="_blank">LICENSE</a> file for further details.</p>

  <h3>Acknowledgements</h3>
  <ul>
    <li>Special thanks to the instructors and peers from the CS2004 course.</li>
    <li>Gratitude for the support from <a href="https://www.exchangerate-api.com/" target="_blank">ExchangeRate-API</a>.</li>
  </ul>

  <hr>
  
</body>
</html>

---
<img src="https://github.com/Anmol-Baranwal/Cool-GIFs-For-GitHub/assets/74038190/72903324-cf57-4e90-80a6-ed3c9734e0ed" width="900">
<br><br>
<img src="https://user-images.githubusercontent.com/74038190/219923823-bf1ce878-c6b8-4faa-be07-93e6b1006521.gif" width="500">
<br><br>
<img src="https://user-images.githubusercontent.com/74038190/219923809-b86dc415-a0c2-4a38-bc88-ad6cf06395a8.gif" width="500">
<br><br>
 
