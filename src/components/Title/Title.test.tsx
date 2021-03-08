import Title from './Title';

it('Renders title passed by props', () => {
  const titleProp = 'Hello world';
  const component = <Title title={titleProp} />;

  expect(component.props.title).toEqual(titleProp);
});
