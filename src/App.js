import React, {Component} from 'react';
import './App.css';

let my_news = [
  {
    "_id": "598194ef1c0ae9da1dae671f",
    "index": 0,
    "picture": "http://placehold.it/32x32",
    "name": "Crawford Vang",
    "gender": "male",
    "company": "QUILK",
    "email": "crawfordvang@quilk.com",
    "phone": "+1 (826) 486-3680",
    "address": "241 Revere Place, Saddlebrooke, Delaware, 1980"
  },
  {
    "_id": "598194ef801433691017bdfe",
    "index": 1,
    "picture": "http://placehold.it/32x32",
    "name": "Martin Mullins",
    "gender": "male",
    "company": "VALREDA",
    "email": "martinmullins@valreda.com",
    "phone": "+1 (998) 422-2789",
    "address": "979 McKibbin Street, Worton, Vermont, 4852"
  },
  {
    "_id": "598194ef0c967e9cd01746f1",
    "index": 2,
    "picture": "http://placehold.it/32x32",
    "name": "Vargas Cox",
    "gender": "male",
    "company": "CABLAM",
    "email": "vargascox@cablam.com",
    "phone": "+1 (814) 468-2575",
    "address": "900 Seeley Street, Bedias, Florida, 2007"
  },
  {
    "_id": "598194efaa1a48c9952a467a",
    "index": 3,
    "picture": "http://placehold.it/32x32",
    "name": "Whitney Galloway",
    "gender": "female",
    "company": "BLUEGRAIN",
    "email": "whitneygalloway@bluegrain.com",
    "phone": "+1 (913) 449-3689",
    "address": "611 Anthony Street, Snelling, Alaska, 2958"
  },
  {
    "_id": "598194efad2d464adb9827b3",
    "index": 4,
    "picture": "http://placehold.it/32x32",
    "name": "Bailey Weiss",
    "gender": "male",
    "company": "ARTWORLDS",
    "email": "baileyweiss@artworlds.com",
    "phone": "+1 (913) 556-3190",
    "address": "581 Emmons Avenue, Townsend, Palau, 5663"
  },
  {
    "_id": "598194ef78bc921e080a111a",
    "index": 5,
    "picture": "http://placehold.it/32x32",
    "name": "Nolan Sheppard",
    "gender": "male",
    "company": "ZENSURE",
    "email": "nolansheppard@zensure.com",
    "phone": "+1 (941) 413-2687",
    "address": "349 Evergreen Avenue, Juarez, Colorado, 5592"
  },
  {
    "_id": "598194ef728b9e1b26ca6ec1",
    "index": 6,
    "picture": "http://placehold.it/32x32",
    "name": "Isabella Jenkins",
    "gender": "female",
    "company": "ZILLACOM",
    "email": "isabellajenkins@zillacom.com",
    "phone": "+1 (933) 446-3050",
    "address": "736 Beaver Street, Makena, Nevada, 7167"
  },
  {
    "_id": "598194efc673edf614b35c91",
    "index": 7,
    "picture": "http://placehold.it/32x32",
    "name": "Becker Valencia",
    "gender": "male",
    "company": "DANCERITY",
    "email": "beckervalencia@dancerity.com",
    "phone": "+1 (993) 425-2515",
    "address": "820 Ivan Court, Dola, Pennsylvania, 7399"
  },
  {
    "_id": "598194ef4b996f917aee6f73",
    "index": 8,
    "picture": "http://placehold.it/32x32",
    "name": "Norton Duffy",
    "gender": "male",
    "company": "PHOTOBIN",
    "email": "nortonduffy@photobin.com",
    "phone": "+1 (847) 509-2266",
    "address": "305 Oak Street, Orin, South Carolina, 4743"
  },
  {
    "_id": "598194ef627874a2fdba50b1",
    "index": 9,
    "picture": "http://placehold.it/32x32",
    "name": "Merle Stuart",
    "gender": "female",
    "company": "ENAUT",
    "email": "merlestuart@enaut.com",
    "phone": "+1 (806) 509-3260",
    "address": "848 Burnett Street, Joes, Utah, 6653"
  },
  {
    "_id": "598194eff83e585e2b5c6dd3",
    "index": 10,
    "picture": "http://placehold.it/32x32",
    "name": "Millicent Kelly",
    "gender": "female",
    "company": "MULTRON",
    "email": "millicentkelly@multron.com",
    "phone": "+1 (887) 543-3309",
    "address": "544 Union Street, Konterra, Mississippi, 7013"
  },
  {
    "_id": "598194efc4d2418de87b6897",
    "index": 11,
    "picture": "http://placehold.it/32x32",
    "name": "Ida Frank",
    "gender": "female",
    "company": "DADABASE",
    "email": "idafrank@dadabase.com",
    "phone": "+1 (902) 497-2780",
    "address": "417 Fuller Place, Stewart, Northern Mariana Islands, 2351"
  },
  {
    "_id": "598194ef3520b97e0b4921d3",
    "index": 12,
    "picture": "http://placehold.it/32x32",
    "name": "Murray Barker",
    "gender": "male",
    "company": "PYRAMI",
    "email": "murraybarker@pyrami.com",
    "phone": "+1 (963) 401-2195",
    "address": "857 Johnson Avenue, Tryon, California, 4179"
  },
  {
    "_id": "598194ef53ab29837cb9b718",
    "index": 13,
    "picture": "http://placehold.it/32x32",
    "name": "Francesca Harvey",
    "gender": "female",
    "company": "QUARMONY",
    "email": "francescaharvey@quarmony.com",
    "phone": "+1 (828) 493-3737",
    "address": "796 Gates Avenue, Adelino, Ohio, 7925"
  },
  {
    "_id": "598194ef02e885219fd3afd3",
    "index": 14,
    "picture": "http://placehold.it/32x32",
    "name": "Tonia Gonzales",
    "gender": "female",
    "company": "GEOFARM",
    "email": "toniagonzales@geofarm.com",
    "phone": "+1 (956) 576-3421",
    "address": "855 Herbert Street, Felt, Minnesota, 7588"
  },
  {
    "_id": "598194efe3292692d9b755de",
    "index": 15,
    "picture": "http://placehold.it/32x32",
    "name": "Carissa Sanders",
    "gender": "female",
    "company": "CORPORANA",
    "email": "carissasanders@corporana.com",
    "phone": "+1 (888) 440-2616",
    "address": "548 Bryant Street, Steinhatchee, Connecticut, 3342"
  },
  {
    "_id": "598194ef376a6fb06e84477b",
    "index": 16,
    "picture": "http://placehold.it/32x32",
    "name": "Kelli Barrera",
    "gender": "female",
    "company": "VENOFLEX",
    "email": "kellibarrera@venoflex.com",
    "phone": "+1 (924) 483-2209",
    "address": "768 Vandervoort Avenue, Odessa, Arizona, 949"
  },
  {
    "_id": "598194ef8a098fb211056ab1",
    "index": 17,
    "picture": "http://placehold.it/32x32",
    "name": "Mcdowell Chen",
    "gender": "male",
    "company": "SYNTAC",
    "email": "mcdowellchen@syntac.com",
    "phone": "+1 (826) 504-3800",
    "address": "402 Clifton Place, Hackneyville, Tennessee, 2314"
  },
  {
    "_id": "598194ef1a7cc7b6c71fcbf0",
    "index": 18,
    "picture": "http://placehold.it/32x32",
    "name": "Conrad Hodges",
    "gender": "male",
    "company": "GEEKOL",
    "email": "conradhodges@geekol.com",
    "phone": "+1 (916) 430-2807",
    "address": "393 Dupont Street, Williston, Idaho, 7172"
  },
  {
    "_id": "598194efbe5d6f0e5c332ca4",
    "index": 19,
    "picture": "http://placehold.it/32x32",
    "name": "Tia Hewitt",
    "gender": "female",
    "company": "EMPIRICA",
    "email": "tiahewitt@empirica.com",
    "phone": "+1 (888) 458-3550",
    "address": "475 Williams Place, Babb, New Mexico, 871"
  }
];

class Article extends React.Component {
  render() {
    let name = this.props.data.name,
      phone = this.props.data.phone,
      key = this.props.index;

    return (
      <div className='article' id={key}>
        <p className='news__author'>{name}</p>
        <p className='news__text'>{phone}</p>
      </div>
    )
  }
}


class Details extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = this.props.state;
  }

  componentDidMount() {
    //setTimeout((() => this.setState({name: 'test'})), 5000);
  }

  render() {
    return <div className='details'>
      {this.props.data ? (
        <div>
          <p>email: <a href={this.props.data.email}>{this.props.data.email}</a></p>
          <p>phone: {this.props.data.phone}</p>
          <p>name: {this.props.data.name}</p>
          <p>company: {this.props.data.company}</p>
          <p>address: {this.props.data.address}</p>
        </div>
      ) : (
       'no data'
      )}
    </div>



  }

}
class Contacts extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = this.props.state;
    this.onSearch = this.props.options.onSearch;
    this.onUserClick = this.props.options.onUserClick;
  }
  render() {
    let data = this.props.data;
    let contactsTemplate;
    let onUserClick = this.onUserClick;

    if (data.length > 0) {
      contactsTemplate = data.map(function (item, index) {
        return (
          <div key={index} onClick={onUserClick}>
            <Article data={item} index={index} key={index} onClick={onUserClick}/>
          </div>
        )
      })
    } else {
      contactsTemplate = <p>no news</p>
    }

    return (
      <div className='contacts'>
        <div className="contact-search">
          <input onChange={this.onSearch.bind(this)}/>
        </div>
        <div className="container-list">
          {contactsTemplate}
        </div>
        <strong className={'news__count ' + (this.props.data.length > 0 ? '' : 'none') }>Total: {this.props.data.length}</strong>
      </div>
    );
  }
}


class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      list: my_news,
      details: my_news[0]
    };
    this.options = {
      onUserClick: this.onUserClick.bind(this),
      onSearch: this.onSearch.bind(this)

    };
  }
  onUserClick(e) {
    let index = e.currentTarget.firstElementChild.getAttribute('id');
    let data = this.state.list[index];
    this.setState({details: data})
  }
  onSearch(e) {
    let value = e.target.value.toLowerCase();
    let list = my_news.filter(function (el) {
      let sValue = el.name.toLowerCase();
      return sValue.indexOf(value) !== -1;
    });
    this.setState({list: list})
  }

  render() {

    return (
      <div className="App">
        <Contacts data={this.state.list} options={this.options} state={this.state}/>

        <Details data={this.state.details} state={this.state}/>
      </div>
    );
  }
}

export default App;
