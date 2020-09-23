import React,{Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle,Breadcrumb,BreadcrumbItem,Button,Label,Input,Col,Row,Modal,ModalHeader,ModalBody,FormGroup,Form} from "reactstrap";
import { Control,LocalForm,Errors } from 'react-redux-form';
const required= (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
class CommentForm extends Component{
    constructor(props){

        super(props);
        this.state={          
            isModalOpen :false
        };       
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
 
    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }
    handleSubmit(values){
        this.toggleModal()
        console.log("Current State is:"+JSON.stringify(values));
alert("Current State is:"+JSON.stringify(values));
    }
   
    render(){
        return (
            <React.Fragment>
            <Button type="submit" color="primary" onClick={this.toggleModal}>
            Submit Comment
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader isOpen={this.state.isModalOpen} toggle={this.toggleModal}>Submit your Comments</ModalHeader>
                <ModalBody>
                <div className='col-12 col-md-12 text-center'>
                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                            <Label htmlfor="rating"> Rating </Label>
                            <Col md={12}>
                            <Control.select model=".rating" id="rating" className="form-control  text-center" name="rating" placeholder="Rating"
                              validators={{
                                  required
                              }} >
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                  </Control.select>  
                              
                              
                            
                           <Errors className="text-danger"
                           model=".rating" show="touched"
                           messages={{
                               required: 'Required'
                           }}
                           />
                            </Col>
                            </Row>
                            <Row className="form-group">
                            <Label htmlfor="name"> Your Name </Label>
                            <Col md={12}>
                            <Control.text model=".name" id="name" className="form-control" name="name" placeholder="name"
                              validators={{
                                  required,minLength:minLength(3),maxLength:maxLength(15)
                              }}    />
                           <Errors className="text-danger"
                           model=".name" show="touched"
                           messages={{
                               required: 'Required',
                               minLength:"Must be greater than 2 characters",
                               maxLength:"Must be 15 characters or less"
                           }}
                           />
                            </Col>
                            </Row>
                            <Row className="form-group">
                            <Label htmlfor="comment"> Comment </Label>
                            <Col md={12} >
                            <Control.textarea model=".comment" id="comment" className="form-control" name="comment" placeholder="comment" rows="6"
                              validators={{
                                  required
                              }}    />
                           <Errors className="text-danger"
                           model=".comment" show="touched"
                           messages={{
                               required: 'Required',

                           }}
                           />
                            </Col>
                            </Row>

                        <Button type="submit" value="submit" color="primary" className="bg-primary">Submit</Button>
                    
                            </LocalForm>
                            </div>
                </ModalBody>
            </Modal>
        </React.Fragment>
);
}






}
export default CommentForm;