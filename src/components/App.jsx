fetch(process.env.BABY_URL).then(res => {
  return res.json().then(console.log);
});
export default function App() {
  
  
  return <div>Hello World</div>;
}
