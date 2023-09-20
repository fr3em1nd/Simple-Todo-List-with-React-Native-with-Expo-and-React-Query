import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10
  },
  modalContainer: {
    margin: 20,
    marginTop: 70,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  mainContainer: {
    marginTop: 50,
    padding: 40
  },
  modalMainTitle:{
    fontSize: 20,
    marginBottom: 10
  }
 
});
export default styles;