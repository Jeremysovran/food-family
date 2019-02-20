import React, { Component } from 'react';
import './style.scss';
import { Accordion, Icon, Image } from 'semantic-ui-react'




export default class FaqPage extends Component {
  state = { activeIndex: null }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <div id="faqpage">
      <Accordion fluid styled>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Qu'est-ce que The Food Family?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
            The Food Family est une plateforme de création d'ateliers culinaires? Oui! Mais avant tout nous sommes une communauté de passionnés qui souhaitent partager ses connaissances et faire des rencontre autour de cette thématique
          </p>        <Image src='src/images/tff-logo2.png' size='big' />

        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
         A quoi servent les cookies?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>

          <p>
            Les cookies sont la monnaie du site! Enfin monnaie, c'est un bien grand mot, vous n'aurez ni le besoin ni l'opportunité de dépenser de l'argent rééle. Les cookies vous permettent de participer aux ateliers, vous les gagnerez en étant actif au sein de la communauté!
          </p>
          <Image.Group size="tiny">
            <Image src='src/images/tff-picto-cookie.png' />
            <Image src='src/images/tff-picto-cookie.png' />
            <Image src='src/images/tff-picto-cookie.png' />
            </Image.Group>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Je souhaite contribuer à la vie de la communauté
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
            Three common ways for a prospective owner to acquire a dog is from
            pet shops, private owners, or shelters.
          </p>
          <p>
            A pet shop may be the most convenient way to buy a dog. Buying a dog
            from a private owner allows you to assess the pedigree and
            upbringing of your dog before choosing to take it home. Lastly,
            finding your dog from a shelter, helps give a good home to a dog who
            may not find one so readily.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 3}
          index={3}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Pourquoi mon annonce a été supprimée?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
          <p>
            A dog is a type of domesticated animal. Known for its loyalty and
            faithfulness, it can be found as a welcome guest in many households
            across the world.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 4}
          index={4}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Quelle est votre politique de confidentialité?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 4}>
          <p>
            A dog is a type of domesticated animal. Known for its loyalty and
            faithfulness, it can be found as a welcome guest in many households
            across the world.
          </p>
        </Accordion.Content>
      </Accordion>
      </div>
    )
  }
}
