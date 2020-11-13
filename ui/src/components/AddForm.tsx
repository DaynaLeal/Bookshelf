import React from 'react'
import Form from 'react-bootstrap/Form';


const AddForm = () => {
  return(
    <Form>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="email" placeholder="title" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlInput2">
        <Form.Label>Author</Form.Label>
        <Form.Control type="email" placeholder="Author name" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlInput3">
        <Form.Label>Series Name</Form.Label>
        <Form.Control type="email" placeholder="Series name" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlInput4">
        <Form.Label>Published Year</Form.Label>
        <Form.Control type="email" placeholder="Year" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlInput5">
        <Form.Label>Page Count</Form.Label>
        <Form.Control type="email" placeholder="Page count" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Medium</Form.Label>
        <Form.Control as="select">
          <option>Hardcover</option>
          <option>Paperback</option>
          <option>eBook</option>
          <option>Audio</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect2">
        <Form.Label>Read Status</Form.Label>
        <Form.Control as="select">
          <option>Read</option>
          <option>TBR</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect3">
        <Form.Label>Rating</Form.Label>
        <Form.Control as="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect4">
        <Form.Label>Example multiple select</Form.Label>
        <Form.Control as="select" multiple>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea2">
        <Form.Label>Review</Form.Label>
        <Form.Control as="textarea" />
      </Form.Group>
    </Form>
  )
}

export default AddForm