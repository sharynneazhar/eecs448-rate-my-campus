## Getting data from the backend

Each page that needs to grab data from the backend needs to be wrapped in a `container`. This container is basically where you’ll `subscribe` to a `collection` (in SQL terms -> a `table`) and pass the data you get back to whatever component that needs it.

Let’s use the `HomeContainer` as an example.

#### Imports:

```
import { Meteor } from 'meteor/meteor’;
import { createContainer } from 'meteor/react-meteor-data’;
import Reviews from '../../../api/reviews';
import Home from '../../pages/home';
```

You'll need the `Meteor` class as always. Then, you'll need the `createContainer` method
from the `react-meteor-data` package which is the official Meteor solution for creating
data containers for React components. Then, you will need to import the collection(s)
and component. In this case, I want the `Home` component to have access to the `Reviews`
collection.  

#### Creating the container

```
export default HomeContainer = createContainer(() => {
  const subscription = Meteor.subscribe('reviews');
  const loading = !subscription.ready();
  const reviews = Reviews.find({}, { sort: { DateTime: -1, limit: 10 }}).fetch();
  return {
    loading,
    reviews,
  }
}, Home);
```

Passed into the `createContainer` method are two arguments. First is a function
that is responsible for fetching all of the data we want to make accessible to the
component as props. (We need to `fetch()` because React will only accept an array,
not a MongoDB cursor that `.find()` returns).

For UI purposes, it is always helpful to know if the data we get from the backend is
even ready for us to use. Note the `loading` variable.

Then, as the second argument, we return a single object that contains our loading
variable and the array of data from our collection. In this case, the `Home` component.

I guess, in a way, you can think of the component as Tony Stark and the container as
Jarvis and his Iron Man suit that gives him all the data he needs. ;)



## Displaying the Data

First, in the `imports/startup/client/route.js` file, you'll need to change
`Route` to use the container instead of the actual component.

Then, to display the data on the page, you just simply need to call
`this.props.*`. In this case, the `Home` component only has access to the `reviews`
collection we passed to it. So, in order to access the data, you just
call `this.props.reviews`.

Here's an example of how the reviews were rendered:

```
renderRecentReviews() {
  let reviews = this.props.reviews.map((review, idx) => {
    return (
      <div key={idx}>- {review.comments}</div>
    );
  });
  return <div>{reviews}</div>;
}
```
