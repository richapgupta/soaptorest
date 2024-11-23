// export function setupCounter(element: HTMLButtonElement) {
//   let counter = 0
//   const setCounter = (count: number) => {
//     counter = count
//     element.innerHTML = `count is ${counter}`
//   }
//   element.addEventListener('click', () => setCounter(counter + 1))
//   setCounter(0)
// }

import * as soap from 'soap';

async function callSoapAPI() {
  try {
    // Create client
    const client = await soap.createClient('https://your-soap-endpoint?wsdl');
    
    // Add headers if needed
    client.addSoapHeader({
      SecurityHeader: {
        Username: 'user',
        Password: 'pass'
      }
    });

    // Call method
    const result = await client.YourMethodNameAsync({
      param1: 'value1',
      param2: 'value2'
    });

    return result;
  } catch (error) {
    console.error('SOAP Error:', error);
    throw error;
  }
}
