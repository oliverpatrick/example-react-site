import { Helmet } from 'react-helmet-async';

import { Hero } from 'app/components/HeroSection';
import { Button } from 'app/components/Button';
import { Location } from 'app/components/Location';
import { ImageCarousel } from 'app/components/Carousel';

import coffeeImage from '../../assets/images/coffee1.jpg';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>

      <ImageCarousel />
      <Hero title="Our Menu">
        <h2>Food One</h2>
        <h4>
          Duis tellus nisl, faucibus et purus eu, tempus pellentesque eros. In
          dui erat, gravida suscipit ipsum ac, cursus placerat tellus.
        </h4>

        <h2>Food Two</h2>
        <h4>
          Duis tellus nisl, faucibus et purus eu, tempus pellentesque eros. In
          dui erat, gravida suscipit ipsum ac, cursus placerat tellus.
        </h4>

        <h2>Food Three</h2>
        <h4>
          Duis tellus nisl, faucibus et purus eu, tempus pellentesque eros. In
          dui erat, gravida suscipit ipsum ac, cursus placerat tellus.
        </h4>

        <h2>Food Four</h2>
        <h4>
          Duis tellus nisl, faucibus et purus eu, tempus pellentesque eros. In
          dui erat, gravida suscipit ipsum ac, cursus placerat tellus.
        </h4>

        <h2>Food Five</h2>
        <h4>
          Duis tellus nisl, faucibus et purus eu, tempus pellentesque eros. In
          dui erat, gravida suscipit ipsum ac, cursus placerat tellus.
        </h4>
      </Hero>
      <Location right={false} />
      <Hero
        title="Lorem ipsum dolor sit amet"
        paragraph="Nulla viverra fermentum ante in rhoncus. Vestibulum sit amet
        nulla ac ante ullamcorper commodo. Nullam porttitor, tellus non luctus
        fermentum, sem diam auctor mi, sed sodales odio tellus quis dui. Morbi
        ac nisl auctor, accumsan nisi quis, semper tellus. In ut tincidunt
        dolor, et dapibus tortor. Sed mi tellus, condimentum sed tempus et,
        porta iaculis est."
        backgroundImage={coffeeImage}
      >
        <Button text="Button"></Button>
      </Hero>
    </>
  );
}
