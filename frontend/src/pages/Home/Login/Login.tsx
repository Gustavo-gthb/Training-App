// import { useState } from "react";
// import Input from "../../../components/Input";
// import { login } from "../../../services/auth/login";
// import { Container, Form, Button } from "./style";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState<string | null>(null);

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const user = await login(username, password); // Chamando a função JavaScript
//       console.log("Usuário logado:", user);
//       setError(null);
//     } catch (err) {
//       setError("Erro ao fazer login. Verifique suas credenciais.");
//     }
//   };

//   return (
//     <Container>
//       <h2>Login</h2>
//       <Form onSubmit={handleLogin}>
//         <Input
//           placeholder="usuário"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <Input placeholder="password" 
//         type="password"
//         value={password} 
//         onChange={(e) => setPassword(e.target.value)}
//         />
//         <Button type="submit">submuit</Button>
//       </Form>
//       {error && }
//     </Container>
//   );
// };

// export default Login;
