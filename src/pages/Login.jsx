import { useState } from "react";
import { Card, CardBody, CardHeader, Col, Row, Container, Form,Label, FormGroup, Input, Button } from "reactstrap";
import { useAuth } from "../Components/Auth";
import { useNavigate } from "react-router-dom";
import Base from "../Components/Base";

function Login() {
  const [user,setUser]=useState("")
  const navigate = useNavigate()
  const auth = useAuth()
  const handleLogin = ()=>{
    auth.login(user)
    navigate('/')

  }
  return (
    <div className="App">
      <Base>
        <Container>
          <Row className="mt-4">
            <Col sm={{ size: 6, offset: 3 }}>
              <Card color="dark" inverse>
                <CardHeader>
                  <h3>Login Here !!</h3>
                </CardHeader>
                <CardBody>
                  <Form>
                    <FormGroup>
                      <Label for="email">Enter Username</Label>
                      <Input type="text" id="username" onChange={(e)=>setUser(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                      <Label for="email">Enter Email</Label>
                      <Input type="text" id="email" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="password">Enter Password</Label>
                      <Input type="password" id="password" />
                    </FormGroup>

                    <Container className="text-center">
                      <Button color="success" outline onClick={handleLogin}>
                        Login
                      </Button>
                      <Button
                        className="ms-2"
                        color="secondary"
                        outline
                        type="reset"
                      >
                        Reset
                      </Button>
                    </Container>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </Base>
    </div>
  );
}
export default Login;

