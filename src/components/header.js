import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import  profile from './profilePhoto.jpg'

console.log(profile)

const ImageCard = () => (
  <Card>
    <Card.Content>
      <Card.Header>Hannah Tuttle</Card.Header>
      <Card.Meta>Full stack Web Developer Student at Lambda School</Card.Meta>
      <Card.Description>
        View My Work Below
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    </Card.Content>
  </Card>
)

export default ImageCard
