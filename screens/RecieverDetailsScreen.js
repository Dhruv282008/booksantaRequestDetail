import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';

export default class RecieverDetailsScreen extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userId: firebase.auth().currentUser.email,
            recieverId: this.props.navigation.getParam('details')["user_id"],
            requestId: this.props.navigation.getParam('details')["request_id"],
            bookName: this.props.navigation.getParam('details')["book_name"],
            reason_for_requesting: this.props.navigation.getParam('datails')["reason_to_request"],
            recieverName: "",
            recieverContact: "",
            recieverAddress: '',
            recieverRequestDocId: ''

            
        }
    }
    getRecieverDetails(){
        db.collection("users").where('email_id','==',this.state.recieverId).get()
            .then(snapshot=>{
                snapshot.forEach(doc=>{
                    this.setState({
                        recieverName: doc.data().first_name,
                    recieverContact : doc.data().contact,
                recieverAddress: doc.data().address,})

                })

            }               
            )
            db.collection('requested_books').where('request_id','==',this.state.requestId).get()
            .then(snapshot=>{
                snapshot.forEach(doc=>{
                    this.setState({recieverRequestDocId:doc.id})
                })
            })
        
    }
    updateBookStatus=()=>{
        db.collection('all_donations').add({
            book_name:  this.state.bookName,
            request_id: this.state.requestId,
            requested_by: this.state.recieverName,
            donor_id: this.state.userId,
            request_status: "Donor Interested"

        })

    }
    componentDidMount(){}
    render(){
        return(
            <View>
                
            </View>
        )
    }
}