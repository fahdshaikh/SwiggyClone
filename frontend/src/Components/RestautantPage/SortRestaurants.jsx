import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import HotelCard from './HotelCard';
var axios = require('axios');

const Wrapper = styled.div`
    color: #171a29;
    // border: 1px solid black;
    font-family: sans-serif;

    h3 {
        margin: 0px 0px 10px 0px;
        font-weight: bolder;
    }

    .big-box {
        padding: 40px 0px 25px 0px;
    }

    .list-inline-item {
        font-size: 16px;
        font-weight: 300;
        line-height: 1.2;
        color: #686b78;
        cursor: pointer;
        border-radius: 0px;
        &:hover {
            border-bottom: 1px solid black;
        }
    }

    .filter {
        color: black;
    }
`;

const Equal = styled.img`
    width: 34px;
    height: 34px;
    border: 1px solid transparent;
    border-radius: 50%;
    margin-right: 16px;
    cursor: pointer;
    margin-left: 2px;
    box-shadow: 0 1px 4px 0 rgba(40, 44, 63, 0.4);
`;

const SortRestaurants = () => {
    const history = useHistory();
    const [data, setData] = useState([]);

    useEffect(() => {
        var config = {
            method: 'get',
            url: 'http://localhost:5000/api/restaurant?lat=12.9259&lng=77.6229',
            headers: {},
        };

        axios(config)
            .then(function (response) {
                // console.log(response.data.current);
                setData(response.data.current);
            })
            .catch(function (error) {
                console.log(error.response.data);
            });
    }, []);

    const allData = () => {
        var config = {
            method: 'get',
            url: 'http://localhost:5000/api/restaurant?lat=12.9259&lng=77.6229',
            headers: {},
        };

        axios(config)
            .then(function (response) {
                // console.log(response.data.current);
                setData(response.data.current);
                history.push('/temp');
                history.push('/');
                // history.push('/Restaurants');
                // history.goBack();
            })
            .catch(function (error) {
                console.log(error.response.data);
            });
    };

    console.log(data);

    const filterData = (sort) => {
        var config = {
            method: 'get',
            url: `http://localhost:5000/api/restaurant?lat=12.9259&lng=77.6229&sort=${sort}`,
            headers: {},
        };

        axios(config)
            .then(function (response) {
                // console.log(response.data.current);
                setData(response.data.current);
            })
            .catch(function (error) {
                console.log(error.response.data);
            });
    };

    return (
        <Wrapper>
            <div className='container-fluid '>
                <div className='big-box align-self-center'>
                    <div
                        className='row mb-0 pb-0'
                        style={{ borderBottom: '3px solid whitesmoke' }}
                    >
                        <div className='col-md-8'>
                            <h3 className='text-left'>
                                <button
                                    className='btn btn-sm'
                                    onClick={allData}
                                >
                                    <Equal
                                        src='/Icons/equal.svg'
                                        alt='restaurant'
                                    />
                                </button>
                                {data.length} restaurants
                            </h3>
                        </div>

                        <ul className='list-inline'>
                            <button
                                className='list-inline-item btn'
                                onClick={() => filterData('average_time')}
                            >
                                Relevance
                            </button>
                            <button
                                className='btn list-inline-item'
                                onClick={() => filterData('average_cost')}
                            >
                                Cost for Two
                            </button>
                            <button
                                className='list-inline-item btn'
                                onClick={() => filterData('rating')}
                            >
                                Rating
                            </button>
                            <button className='list-inline-item btn filter'>
                                Filters
                                <img
                                    src='Icons/filter.svg'
                                    alt='filter icon'
                                    style={{
                                        width: '30px',
                                        height: '30px',
                                        border: '1.5px solid #fc8019 ',
                                        borderRadius: '50%',
                                        marginLeft: '8px',
                                    }}
                                />
                            </button>
                        </ul>
                    </div>
                </div>
            </div>
            <div
                className='row row-cols-4'
                style={{
                    width: '100%',
                    margin: 'auto',
                }}
            >
                {data.map((item) => (
                    <HotelCard data={item} key={item._id} />
                ))}
            </div>
        </Wrapper>
    );
};

export default SortRestaurants;