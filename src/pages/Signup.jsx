import {
  Container,
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Input,
  Button,
  Row,
  Col,
} from "reactstrap";
import {  useState } from "react";
import Base from "../Components/Base";

function Signup() {
    const [data, setData] = useState({
      name: "",
      email: "",
      password: "",
      about: ""
    });

    // useEffect(()=>{
    //   console.log(data)
    // },[data])

    const handleChange = (event,field) => {
      setData({...data, [field]:event.target.value} )
      // console.log(data)
    };

    const resetData=()=>{
      setData({
        name: "",
        email: "",
        password: "",
        about: "",
      });
    }

    const submitForm=(event)=>{
      event.preventDefault()
      console.log(data)
    }
  return (
    <div className="App">
      <Base>
        <Container>
          <Row className="mt-4">
            {JSON.stringify(data)}
            <Col sm={{ size: 6, offset: 3 }}>
              <Card color="dark" inverse>
                <CardHeader>
                  <h3>Fill Information to Register !!</h3>

                  <CardBody>
                    <Form onSubmit={submitForm}>
                      <FormGroup>
                        <label for="name">Enter Name</label>
                        <Input
                          type="text"
                          placeholder="Enter Here! "
                          id="name"
                          onChange={(event) => handleChange(event, "name")}
                          value={data.name}
                        />
                      </FormGroup>
                      <FormGroup>
                        <label for="email">Enter Email</label>
                        <Input
                          type="text"
                          placeholder="Enter Here!"
                          id="email"
                          onChange={(event) => handleChange(event, "email")}
                          value={data.email}
                        />
                      </FormGroup>
                      <FormGroup>
                        <label for="password">Enter Password</label>
                        <Input
                          type="password"
                          placeholder="Enter Here!"
                          id="password"
                          onChange={(event) => handleChange(event, "password")}
                          value={data.password}
                        />
                      </FormGroup>
                      <FormGroup>
                        <label for="about">More Information..</label>
                        <Input
                          type="textarea"
                          placeholder="Enter Here!"
                          id="about"
                          onChange={(event) => handleChange(event, "about")}
                          value={data.about}
                          style={{ height: "250px" }}
                        />
                      </FormGroup>
                      <Container className="text-center">
                        <Button outline color="success">
                          Register
                        </Button>
                        <Button onClick={resetData}
                          outline
                          color="secondary"
                          className="ms-2"
                          type="reset"
                        >
                          Reset
                        </Button>
                      </Container>
                    </Form>
                  </CardBody>
                </CardHeader>
              </Card>
            </Col>
          </Row>
        </Container>
      </Base>
    </div>
  );
}
export default Signup;
