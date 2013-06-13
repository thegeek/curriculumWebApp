'use strict';

angular.module('curriculumApp')
  .controller('WorkinfoCtrl', function ($scope, $routeParams) {
  var workinfo = {
    en: {
      personalProfile: {
        title: 'Personal Profile',
        info: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.'
      },
      workExperience: {
        title: 'Work Experience',
        info: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.',
        works: [{
            company: 'WideSolution s.a.s',
            job: 'Web Specialist',
            date: ' From Settembre 2012 until Today',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.'
          }, {
            company: 'WideSolution s.a.s',
            job: 'Web Specialist',
            date: 'From Settembre 2011 until Today',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.'
          }
        ]
      },
      skills: {
        title: 'Skills'
      },
      education: {
        title: 'Educazione',
        educationTitles: [{
            college: 'Università degli Studi di Salerno',
            course: 'Informatica',
            description: 'Description',
            graduated: {
              thesis: 'Progettazione e Svilupo di Applicazioni Web',
              valutation: '104/110',
              info: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.'
            }
          }, {
            college: 'Università degli Studi di Salerno',
            course: 'Informatica',
            description: '',
            graduated: {
              thesis: 'Progettazione e Svilupo di Applicazioni Web',
              valutation: '104/110',
              info: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.'
            }
          }

        ]
      },
      portfolio: {
        title: 'Portfolio',
        works: [{
            client: 'La Regina di San Marzano',
            website: 'http://www.lareginadisanmarzano.com',
            isUrl: true,
            description: 'Front-end/Back-End Development'
          }, {
            client: 'You Laurea ',
            website: 'http://flip.youlaurea.it',
            isUrl: false,
            description: 'Front-end/BackEnd Development'
          }, {
            client: 'Cipolla Ramata di Montoro',
            website: 'http://flip.youlaurea.it',
            isUrl: true,
            description: 'Front-end/BackEnd Development'
          }
        ]
      },
    },
    it: {
      personalProfile: {
        title: 'Profilo Personale',
        info: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.'
      },
      workExperience: {
        title: 'Esperienze Lavorative',
        info: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.',
        works: [{
            company: 'WideSolution s.a.s',
            job: 'Web Specialist',
            date: ' Da Settembre 2012 ad Oggi',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.'
          }, {
            company: 'WideSolution s.a.s',
            job: 'Web Specialist',
            date: ' Da Settembre 2011 ad Oggi',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.'
          }
        ]
      },
      skills: {
        title: 'Skills',
        slides: [{
            title: 'Ambiente Web / Lato Client',
            points: [{
                title: 'Programmazione Html5,Css3 e Javascript<br/> OOJS, ADM e Puro'
              }, {
                title: 'Principali Web Development Framework Utilizzati',
                points: [{
                    title: 'Yeoman, Html5 Poilerplate'
                  }
                ]
              }, {
                title: 'Principali Framework/Library JS Utilizzati',
                points: [{
                    title: 'jQuery, Jquery UI,Jquery Mobile'
                  }, {
                    title: 'Underscore, BackBone,RequireJs'
                  }, {
                    title: 'Modernizer'
                  }
                ]
              }
            ]
          }, {
            title: 'Ambiente Web / Lato Client',
            points: [{
                title: 'Principali Framework/Library CSS Utilizzati',
                points: [{
                    title: 'Twitter Bootstrap<br /> Sass e Css Version'
                  }, {
                    title: 'Normalizer'
                  }, {
                    title: 'Compass / Sass'
                  }
                ]
              }
            ]
          }, {
            title: 'Ambiente Web / Lato Server',
            points: [{
                title: 'Principali Framework/Library CSS Utilizzati',
                points: [{
                    title: 'PHP, OOPHP, NodeJs,Apache'
                  }
                ]
              }, {
                title: 'Principali Framework Php Utilizzati',
                points: [{
                    title: 'CodeIgniter, Laraver V3 e V4'
                  }
                ]
              }, {
                title: 'Principali CMS Utilizzati',
                points: [{
                    title: 'Wordpress, Wordpress Plug-In Development'
                  }
                ]
              },

            ]
          }, {
            title: 'Ambiente Web / Lato Server',
            points: [{
                title: 'Principali Framework NodeJs Utilizzati',
                points: [{
                    title: 'ExpressJs'
                  }
                ]
              }, {
                title: 'Principali Basi Dati Utilizzate',
                points: [{
                    title: 'MySql, Redis, MongoDb'
                  }
                ]
              }
            ]
          }, {
            title: 'Ambiente Os',
            points: [{
                title: 'Configurazione e Manutenzione Server Linux',
              }, {
                title: 'Configurazione Server Apache Mysql',
              }, {
                title: 'Configurazione Server Redis',
              }, {
                title: 'Configurazione Server MongoDb',
              }, {
                title: 'Configurazione Ambienti di Sviluppo Git Based',
              }, {
                title: 'Configurazione Reti Aziendali Wan/Lan/Wifi',
              },
            ]
          }, {
            title: 'Ambiente Os',
            points: [ {
                title: 'Configurazione Macchine Linux/Mac OS/Windows',
              }, {
                title: 'Conoscenza Ed Utilizzo Dei Pacchetti Office e iWork',
              },
              {
                title: 'Conoscenza e Utilizzo di Strumenti Grafici Adobe Suite Principalmente Orientate al Web Design',
              }
            ]
          }, {
            title: 'Altri Linguaggi di Programmazione',
            points: [{
                title: 'C,Objective-C,Java,Python,Bash Script',
              }, {
                title: 'Sviluppo Applicativi iOs e Mac Os X Based',
              }
            ]
          }
        ]
      },
      education: {
        title: 'Educazione',
        educationTitles: [{
            college: 'Università degli Studi di Salerno',
            course: 'Informatica',
            description: 'Descrizione',
            graduated: {
              thesis: 'Progettazione e Svilupo di Applicazioni Web',
              valutation: '104/110',
              info: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.'
            }
          }, {
            college: 'Università degli Studi di Salerno',
            course: 'Informatica',
            description: '',
            graduated: {
              thesis: 'Progettazione e Svilupo di Applicazioni Web',
              valutation: '104/110',
              info: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.'
            }
          }, {
            college: 'Università degli Studi di Salerno',
            course: 'Informatica',
            description: 'Descrizione'

          }

        ]
      },
      portfolio: {
        title: 'Portfolio',
        works: [{
            client: 'La Regina di San Marzano',
            website: 'http://www.lareginadisanmarzano.com',
            isUrl: true,
            description: 'Sviluppo Front-end e Backend'
          }, {
            client: 'You Laurea ',
            website: 'http://flip.youlaurea.it',
            isUrl: false,
            description: 'Sviluppo Fonrt-end e Back-End'
          }, {
            client: 'Cipolla Ramata di Montoro',
            website: 'http://flip.youlaurea.it',
            isUrl: true,
            description: 'Front-end/BackEnd Development'
          }
        ]
      },
    }
  };
  $scope.lang = $scope.lang || en;
  if ($scope.lang == 'en') {
    $scope.workinfo = workinfo.en;
  } else {
    $scope.workinfo = workinfo.it;
  }

  console.log($routeParams);
}).directive('slider', [function () {
  return {
    priority: 0,
    template: '<div class="deck-container"></div>',
    replace: true,
    transclude: false,
    restrict: 'M',
    compile: function compile(tElement, tAttrs, transclude) {
      return {
        pre: function(scope,iElement, iAttrs,controller) { 
          console.log(scope);
          var slideTemplate = angular.element('<div></div>',{ class:'slide' })
          var titleTemplate = angular.element('<h2></h2>');
          var firstLevelUlTemplate = angular.element('<ul></ul>');
          var firstLevelLiTemplate = angular.element('<li></li>');
          var secondLevelTitleTemplate = angular.element('<span></span>');
          var slides = scope.$eval(tAttrs.slider);
          angular.forEach(slides, function(slide,index) {
            var currentSlideDom = slideTemplate.clone();
            var title = titleTemplate.clone().text(slide.title);
            var firstLevelUl = firstLevelUlTemplate.clone();
            var points = slide.points;
            angular.forEach(points, function(point,pointIndex){
              var pointLi = firstLevelLiTemplate.clone();
              if(pointIndex != 0) {
                pointLi.addClass('slide');
              }
              var pointTitle = secondLevelTitleTemplate.clone().html(point.title);
              console.log("point",point);
              var secondLevelUl = firstLevelUlTemplate.clone();
              var subpoints = point.points;
              angular.forEach(subpoints, function(subpoint,indexSubPoint){
                var thirdLevelLi = firstLevelLiTemplate.clone().html(subpoint.title);
                secondLevelUl.append(thirdLevelLi);
              })
              pointLi.append(pointTitle);
              pointLi.append(secondLevelUl);
              firstLevelUl.append(pointLi);
            });
            currentSlideDom.append(title);
            currentSlideDom.append(firstLevelUl);
            iElement.append(currentSlideDom);
          });
        },
        post: function() { 
          console.log('post Link') 
          jQuery.deck('.slide',{
              keys: {
                  next: [32,39],
                  previous: [37]
              }
          });
        }
      }
    }
  };
}])