'use strict';

angular.module('curriculumApp')
  .controller('WorkinfoCtrl', [ '$scope','$routeParams', function ($scope, $routeParams) {
  var workinfo = {
    en: {
        personalProfile: {
          title: 'Personal Profile',
          info: "<p>Hi, my name is Francesco Fienga, i'm 30 years old and i'm a Web Specialist. My passion for computer technologies goes back to when i was 8 years old, when i turned on my first pc, if you want to call it so, an 8086 with 60mb hd and 256k memory with a green dotted matrix screen.</p><p>Since then i've improved my knowledge day by day, first focusing on OS, (Redhat 6, then Gentoo and Ubuntu to end on OSX machine), then on Web Security (penetration testing, programs code cracking), to end to Web develompment.</p> <p>As Gratuated in IT Degree, i know from the basic to the advanced programming tecniques, a large range of programming languages as, c,java,python,js,bash,cocoa and ways to mix them together to solve problems.</p> <p>During my studies, i've worked as selfemploye to solve informatic trouble to my acquaintance,  like networking setup for small firm, or building mail protocol system.</p> <p>Most important things i've learned in this 22 year in IT world is that every piece of knowledge, can be use in circumstances that aren't think for. Nowadays this approch is a part of what is  called 'Lateral Thinghing', and i try to use it as much as i can.</p> <p>I'm married, and i like to go in countries where my job is valutated much more than in italy. Much of the customer here thinks that a website is matter of 1 hour and 100€ but they want them with high quality and highly interactive. Who does my job know what i mean.</p> <p>Don't get me wrong i like to work with my Boss, but my dream is to have a family in a better place. I just hope it's my country but i know that's a long shot.</p> <p>Keep Reading i hope you like.</p>"
        },
        workExperience: {
          title: 'Work Experience',
          info: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.',
          works: [
            {
              company: 'WideSolution s.a.s',
              job: 'Web Specialist',
              date: ' From Settembre 2011 until Today',
              description: "<p>My main role in Wide Solution, is Web Specialist. I realize all front-end project, using most advanced coding flow technique like bower, composer, yeoman.</p><p>For some complex Project i realize backend too, generally based on Laravel, but i have CodeIgniter knowledge too. </p><p>I use and programm jQuery plugins and backbone app a lot, and sometimes jquery-ui too, but nowadays i'm learning angularjs to get to the next level.</p>"
            }
          ]
        },
        skills: {
                  title: 'Skills',
                  slides: [
                    {
                      title: 'Web / Client Side',
                      points: [
                        {
                          title: 'Html5,Css3 e Javascript Programming <br/> OOJS, ADM e Pure'
                        }, {
                          title: 'Web Development Framework Used',
                          points: [
                            {
                              title: 'Yeoman, Html5 Poilerplate'
                            }
                          ]
                        }, {
                          title: 'Framework/Library JS Used',
                          points: [
                            {
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
                      title: 'Web / Client Side',
                      points: [
                        {
                          title: 'Framework/Library CSS Used',
                          points: [
                            {
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
                      title: 'Web / Server Side',
                      points: [
                        {
                          title: 'Application/Programming Languages Used',
                          points: [
                            {
                              title: 'PHP, OOPHP, NodeJs,Apache'
                            }
                          ]
                        }, {
                          title: 'PHP Framework Used',
                          points: [
                            {
                              title: 'CodeIgniter, Laraver V3 e V4'
                            }
                          ]
                        }, {
                          title: 'CMS Used',
                          points: [
                            {
                              title: 'Wordpress, Wordpress Plug-In Development'
                            }
                          ]
                        },

                      ]
                    }, {
                      title: 'Web / Server Side',
                      points: [
                        {
                          title: 'NodeJs Framework Used',
                          points: [
                            {
                              title: 'ExpressJs'
                            }
                          ]
                        }, {
                          title: 'Db Application Used',
                          points: [
                            {
                              title: 'MySql, Redis, MongoDb'
                            }
                          ]
                        }
                      ]
                    }, {
                      title: 'Operative Systems',
                      points: [
                        {
                          title: 'Linux Sever Configuration and Maintainance',
                        }, {
                          title: 'Apache/Mysql Installation Configuration and Maintainance',
                        }, {
                          title: 'Server Redis Configuration',
                        }, {
                          title: 'Server MongoDb Configuration',
                        }, {
                          title: 'Configuration of Development Project git based',
                        }, {
                          title: 'Wan/Lan/Wifi Configuration and Maintainance',
                        },
                      ]
                    }, {
                      title: 'Operative Systems',
                      points: [
                        {
                          title: 'Linux/Mac OS/Windows PC Installation Configuration and Maintainance',
                        }, {
                          title: 'iWork and Office suite knowledge',
                        },
                        {
                          title: 'Adobe Suite knowledge focused on web Development',
                        }
                      ]
                    }, {
                      title: 'Other Programming Languages',
                      points: [
                        {
                          title: 'C,Objective-C,Java,Python,Bash Script',
                        }, {
                          title: 'iOs e Mac Os X Based app development',
                        }
                      ]
                    }
                  ],
                  notes: 'Use Arrows to navigate'
                },
          education: {
            title: 'Educazione',
            educationTitles: [
              {
                college: 'Università degli Studi di Salerno',
                course: 'Informatic Technologies',
                graduated: {
                  thesis: 'iOs Application Development',
                  valutation: '104/110',
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
                      description: 'Front-end/Back-end Development with Lavarel and AMDJS'
                    }, {
                      client: 'You Laurea ',
                      website: 'http://flip.youlaurea.it',
                      isUrl: true,
                      description: 'Front-end development with jQuery, as project Required'
                    }, {
                      client: 'Cipolla Ramata di Montoro',
                      website: 'http:// www.cipollaramatadimontoro.com',
                      isUrl: true,
                      description: 'Front-end/BackEnd Development'
                    }, {
                      client: 'Facebook App per Emu Roma',
                      website: 'https://apps.facebook.com/designyourxmas/',
                      isUrl: true,
                      description: 'Facebook App Development, Mailing Services e Custom Statistics Usage Report'
                    }, {
                      client: 'Sviluppo Plug-in Wordpress',
                      website: 'http://www.blogcida.it - http://www.oratoriocavadeitirreni.org',
                      isUrl: false,
                      description: 'Wordpress configuration/maintainance and plug-in development'
                    }
        ]
              },
            },
            it: {
              personalProfile: {
                title: 'Profilo Personale',
                info: 'ho lavorato su parecchi progetti sia in ambiente universitario, che lavorativo sono collaborativo sia in ambienti aziendali sia sul web dove collaboro saltuariamente a progetti inerenti la programmazione web in generale e nello specifico sulla programmazione javascript, html, css e php molti dei progetti che ho seguito nel mio lavoro mi hanno portato a interagire sia con i clienti sia con altri professionisti del settore riuscendo a soddisfare tutti i requisiti richiesti nei tempi richiesti tendo ad essere propositivo e pragmatico nel problem solving suggerendo ed adottando le più nuove tecnologie ove necessario, rimanendo aperto al dialogo e alle direttive del team leader'
              },
              workExperience: {
                title: 'Esperienze Lavorative',
                info: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.',
                works: [
                  {
                      company: 'WideSolution s.a.s',
                      job: 'Web Specialist',
                      date: ' Da Settembre 2011 ad Oggi',
                      description: 'Mi Occupo della realizzazione di Front-end grafici basati sulle tecnologie HTML5, Javascript e PHP. Sviluppo plug-in Jquery e Wordpress ad Hoc per ogni necessità che il corrente progetto richiede. Configuro e Manutenziono I server aziendali e quelli dei clienti, principalmente su macchine Linux con configurazione Apache Mysql.'
                    }
                  ]
                },
                skills: {
                  title: 'Skills',
                  slides: [
                    {
                      title: 'Ambiente Web / Lato Client',
                      points: [
                        {
                          title: 'Programmazione Html5,Css3 e Javascript<br/> OOJS, ADM e Puro'
                        }, {
                          title: 'Principali Web Development Framework Utilizzati',
                          points: [
                            {
                              title: 'Yeoman, Html5 Poilerplate'
                            }
                          ]
                        }, {
                          title: 'Principali Framework/Library JS Utilizzati',
                          points: [
                            {
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
                      points: [
                        {
                          title: 'Principali Framework/Library CSS Utilizzati',
                          points: [
                            {
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
                      points: [
                        {
                          title: 'Principali Framework/Library CSS Utilizzati',
                          points: [
                            {
                              title: 'PHP, OOPHP, NodeJs,Apache'
                            }
                          ]
                        }, {
                          title: 'Principali Framework Php Utilizzati',
                          points: [
                            {
                              title: 'CodeIgniter, Laraver V3 e V4'
                            }
                          ]
                        }, {
                          title: 'Principali CMS Utilizzati',
                          points: [
                            {
                              title: 'Wordpress, Wordpress Plug-In Development'
                            }
                          ]
                        },

                      ]
                    }, {
                      title: 'Ambiente Web / Lato Server',
                      points: [
                        {
                          title: 'Principali Framework NodeJs Utilizzati',
                          points: [
                            {
                              title: 'ExpressJs'
                            }
                          ]
                        }, {
                          title: 'Principali Basi Dati Utilizzate',
                          points: [
                            {
                              title: 'MySql, Redis, MongoDb'
                            }
                          ]
                        }
                      ]
                    }, {
                      title: 'Ambiente Os',
                      points: [
                        {
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
                      points: [
                        {
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
                      points: [
                        {
                          title: 'C,Objective-C,Java,Python,Bash Script',
                        }, {
                          title: 'Sviluppo Applicativi iOs e Mac Os X Based',
                        }
                      ]
                    }
                  ],
                  notes: 'Utilizza le freccie per Navigare'
                },
                education: {
                  title: 'Educazione',
                  educationTitles: [
                    {
                      college: 'Università degli Studi di Salerno',
                      course: 'Informatica',
                      description: 'Da Settembre 2008 a Dicembre 2011',
                      graduated: {
                        thesis: 'Progettazione e Svilupo di Applicazioni Web',
                        valutation: '104/110'
                      }
                    }, {
                      college: 'Università degli Studi di Siena',
                      course: 'Ingegneria Informatica',
                      description: 'Programmazione C, Robotica, Elettronica, Telecomunicazioni',
                    }
                  ]
                },
                portfolio: {
                  title: 'Portfolio',
                  works: [
                    {
                      client: 'La Regina di San Marzano',
                      website: 'http://www.lareginadisanmarzano.com',
                      isUrl: true,
                      description: 'Sviluppo Front-end e Backend'
                    }, {
                      client: 'You Laurea ',
                      website: 'http://flip.youlaurea.it',
                      isUrl: true,
                      description: 'Sviluppo Fonrt-end e Back-End'
                    }, {
                      client: 'Cipolla Ramata di Montoro',
                      website: 'http:// www.cipollaramatadimontoro.com',
                      isUrl: true,
                      description: 'Front-end/BackEnd Development'
                    }, {
                      client: 'Facebook App per Emu Roma',
                      website: 'https://apps.facebook.com/designyourxmas/',
                      isUrl: true,
                      description: 'Facebook App Development, Mailing Services e Custom Statistics Usage Report'
                    }, {
                      client: 'Sviluppo Plug-in Wordpress',
                      website: 'http://www.blogcida.it - http://www.oratoriocavadeitirreni.org',
                      isUrl: false,
                      description: 'Sviluppo Plug-in Ad Hoc per vari clienti'
                    }
                  ]
                },
              }
            };
  $scope.lang = $scope.lang || 'en';
  if ($scope.lang === 'en') {
    $scope.workinfo = workinfo.en;
  } else {
    $scope.workinfo = workinfo.it;
  }

}]).directive('slider', [function () {
  return {
    priority: 0,
    template: '<div class="deck-container"></div>',
    replace: true,
    transclude: false,
    restrict: 'M',
    compile: function compile(tElement, tAttrs, transclude) {
      return {
        pre: function(scope,iElement, iAttrs,controller) {
          var slideTemplate = angular.element('<div></div>',{ class:'slide' });
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
              if(pointIndex !== 0) {
                pointLi.addClass('slide');
              }
              var pointTitle = secondLevelTitleTemplate.clone().html(point.title);
              var secondLevelUl = firstLevelUlTemplate.clone();
              var subpoints = point.points;
              angular.forEach(subpoints, function(subpoint,indexSubPoint){
                var thirdLevelLi = firstLevelLiTemplate.clone().html(subpoint.title);
                secondLevelUl.append(thirdLevelLi);
              });
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
            jQuery.deck('.slide',{
                keys: {
                    next: [32,39],
                    previous: [37]
                  }
                });
          }
      };
    }
  };
}]);
