import React, {Component } from 'react';
import '../stylesheets/HomePage.css';

import Slideshow from "./slider";
import Movie from "./Movie";
import deadpool from "../images/deadpool.jpg";
import alice from "../images/alice.jpg";
import harrypotter from "../images/deathly-hallows-p2-2.jpg";
import FF from "../images/fast-five-2.jpg";
import batman from "../images/batman-v-superman-dawn-of-justice-3.jpg";
import alpha from "../images/alpha-alert-1.jpg";
import $ from "jquery";

class HomePage extends Component {
    componentDidMount() {
        console.log(this.props);
        $(".lang-filter-heading").click(function(){
            $(".lang-filter").slideToggle();
        });

        $(".genre-filter-heading").click(function(){
            $(".genre-filter").slideToggle();
        });
    }
    render() {
        return (
            <div className="HomePage">
    <Slideshow className="slider"/>

    <div className="movieslist">
        <h2>Movies :</h2>
        <ul className=" movie-categories">
            <li className=" movie-categories-list">
                <a id="now-showing-btn"
                   data-toggle="#now-showing"
                   onClick ="$('.search-pagewise').show();" >
                    Now Showing
                </a>
            </li>
            <li className=" movie-categories-list">Coming Soon</li>
            <li className=" movie-categories-list">Exclusive</li>
        </ul>

        <div className=" box-filter">

            <div >
                <div className="box-filter-list">
                    <button className="lang-filter-heading">Select Language</button>
                    <ul className="lang-filter">
                        <li className="filter-list">
								<span className="__checkbox">
									<input type="checkbox" value="Telugu" />
									<span className="checkbox-label">
                                        <a
                                            className="_anchor-filter"
                                            href="javascript:void(0);">Telugu</a>
									</span>
								</span>
                        </li>
                        <li className="filter-list">
								<span className="__checkbox">
									<input type="checkbox" value="Hindi" />
									<span className="checkbox-label">
                                        <a
                                            className="_anchor-filter"
                                            href="javascript:void(0);">Hindi</a></span>
									</span>
                        </li>
                        <li className="filter-list">
								<span className="__checkbox">
									<input type="checkbox" value="English" />
									<span className="checkbox-label">
                                        <a
                                            className="_anchor-filter"
                                            href="javascript:void(0);">English</a>
									</span>
								</span>
                        </li>
                        <li className="filter-list">
								<span className="__checkbox">
									<input type="checkbox" value="English" />
									<span className="checkbox-label">
                                        <a
                                            className="_anchor-filter"
                                            href="javascript:void(0);">Marathi</a>
									</span>
								</span>
                        </li>

                    </ul>
                </div>
            </div>

            <div >
                <div className="box-filter-list">
                    <button className="genre-filter-heading">Select Genre</button>
                    <ul className="genre-filter ">
                        <li className="filter-list">
								<span data-filter="action" className="__checkbox">
									<input type="checkbox" value="Action" />
                                        <span className="checkbox-label">
                                            <a
                                                className="_anchor-filter"
                                                href="javascript:void(0);">Action
                                            </a>
                                        </span>

								</span>
                        </li>
                        <li className="filter-list">
								<span data-filter="adventure" className="__checkbox">
									<input type="checkbox" value="Adventure" />
                                        <span className="checkbox-label">
                                            <a
                                                className="_anchor-filter"
                                                href="javascript:void(0);">Adventure
                                            </a>
                                        </span>
									</span>
                        </li>
                        <li className="filter-list">
								<span data-filter="adventure" className="__checkbox">
									<input type="checkbox" value="Adventure" />
                                        <span className="checkbox-label">
                                            <a
                                                className="_anchor-filter"
                                                href="javascript:void(0);">Animation
                                            </a>
                                        </span>
									</span>
                        </li>
                        <li className="filter-list">
								<span data-filter="adventure" className="__checkbox">
									<input type="checkbox" value="Adventure" />
                                        <span className="checkbox-label">
                                            <a
                                                className="_anchor-filter"
                                                href="javascript:void(0);">Crime
                                            </a>
                                        </span>
									</span>
                        </li>
                        <li className="filter-list">
								<span data-filter="adventure" className="__checkbox">
									<input type="checkbox" value="Adventure" />
                                        <span className="checkbox-label">
                                            <a
                                                className="_anchor-filter"
                                                href="javascript:void(0);">Comedy
                                            </a>
                                        </span>
									</span>
                        </li>
                        <li className="filter-list">
								<span data-filter="adventure" className="__checkbox">
									<input type="checkbox" value="Adventure" />
                                        <span className="checkbox-label">
                                            <a
                                                className="_anchor-filter"
                                                href="javascript:void(0);">Crime
                                            </a>
                                        </span>
									</span>
                        </li>
                        <li className="filter-list">
								<span data-filter="adventure" className="__checkbox">
									<input type="checkbox" value="Adventure" />
                                        <span className="checkbox-label">
                                            <a
                                                className="_anchor-filter"
                                                href="javascript:void(0);">Thriller
                                            </a>
                                        </span>
									</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div>
        <div className="moviesList">
            <Movie Title="Deadpool" Poster={deadpool}/>
            <Movie Title="Alice through the looking glass" Poster={alice}/>
            <Movie Title="HarryPotter" Poster={harrypotter}/>
            <Movie Title="Fast&Furious" Poster={FF}/>
            <Movie Title="Batman" Poster={batman}/>
            <Movie Title="Alpha Alert" Poster={alpha}/>
            <Movie Title="ASVR" Poster={harrypotter}/>
        </div>
    </div>
</div>
    )
    }}

    export default HomePage;