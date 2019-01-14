import React from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import Form from "./Form.js";


const Display = ({ item, loading, handleUpdateForm, handleDel, isEditing }) => {
  const cardStyle = {width:'30%',height:'60%', borderStyle:'solid',marginBottom : "20px"}
    return (
      <div style={cardStyle}>
        <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>{item.title}</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>{item.description}</CardText>
            <Button onClick={() => handleDel(item._id)}>Del</Button>
            <Button onClick={() => handleUpdateForm(item._id)}>Edit</Button>
          </CardBody>
        </Card>
      </div>
      
    )
}

export default Display



