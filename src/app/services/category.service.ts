import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  availableCategories: Category[];

  constructor() {
    let logo_image = '/assets/Images/Ichud Logo BandW.jpg'
    this.availableCategories = [
      {
        Name: 'Ichud Mosdos', ImageUrl: logo_image, Id: 1, Images: [
          { Name: 'Meet the Students', ImageUrl: logo_image, LoadInPopup: true, Images: [
            { Name: 'Gan Zion', ImageUrl: logo_image },
            { Name: 'Nursery', ImageUrl: logo_image },
            { Name: 'Kindergarten - 2nd', ImageUrl: logo_image },] },
          {
            Name: 'Boys', ImageUrl: '/assets/Images/tt logo.png', Images: [
              { Name: 'Gan Zion', ImageUrl: logo_image, LoadInPopup: true, Images: [
                    { Name: 'Gan Zion', ImageUrl: logo_image },
                    { Name: 'Nursery', ImageUrl: logo_image },
                    { Name: 'Kindergarten - 2nd', ImageUrl: logo_image },]},
              { Name: 'Nursery', ImageUrl: logo_image, LoadInPopup: true, Images: [
                    { Name: 'Gan Zion', ImageUrl: logo_image },
                    { Name: 'Nursery', ImageUrl: logo_image },
                    { Name: 'Kindergarten - 2nd', ImageUrl: logo_image },] },
              { Name: 'Kindergarten - 2nd', ImageUrl: logo_image, LoadInPopup: true, Images: [
                    { Name: 'Gan Zion', ImageUrl: logo_image },
                    { Name: 'Nursery', ImageUrl: logo_image },
                    { Name: 'Kindergarten - 2nd', ImageUrl: logo_image },]  },
              { Name: 'Talmud Torah 3-8', ImageUrl: logo_image, LoadInPopup: true, Images: [
                    { Name: 'Gan Zion', ImageUrl: logo_image },
                    { Name: 'Nursery', ImageUrl: logo_image },
                    { Name: 'Kindergarten - 2nd', ImageUrl: logo_image },]  },
              { Name: 'Mechinah Leyishiva', ImageUrl: '/assets/Images/kita 9 logo.png', LoadInPopup: true, Images: [
                    { Name: 'Gan Zion', ImageUrl: logo_image },
                    { Name: 'Nursery', ImageUrl: logo_image },
                    { Name: 'Kindergarten - 2nd', ImageUrl: logo_image },]  },
              { Name: 'Yeshiva Ketanah', ImageUrl: logo_image, LoadInPopup: true, Images: [
                    { Name: 'Gan Zion', ImageUrl: logo_image },
                    { Name: 'Nursery', ImageUrl: logo_image },
                    { Name: 'Kindergarten - 2nd', ImageUrl: logo_image },]  },
              { Name: 'Mesivta', ImageUrl: logo_image, LoadInPopup: true, Images: [
                    { Name: 'Gan Zion', ImageUrl: logo_image },
                    { Name: 'Nursery', ImageUrl: logo_image },
                    { Name: 'Kindergarten - 2nd', ImageUrl: logo_image },]  },
              { Name: 'Kolel', ImageUrl: logo_image, LoadInPopup: true, Images: [
                    { Name: 'Gan Zion', ImageUrl: logo_image },
                    { Name: 'Nursery', ImageUrl: logo_image },
                    { Name: 'Kindergarten - 2nd', ImageUrl: logo_image },]  },
            ]
          },
          {
            Name: 'Girls', ImageUrl: logo_image, Images: [
              { Name: 'Bnos Pre School', ImageUrl: logo_image },
              { Name: 'Bnos Elementry', ImageUrl: logo_image },
              { Name: 'Bnis High School', ImageUrl: logo_image },
              { Name: 'Bnos Seminary', ImageUrl: logo_image },
            ]
          },
          {
            Name: 'Camp', ImageUrl: '/assets/Images/camp boys logo.png', Images: [
              { Name: 'Camp Bnei Bobov', ImageUrl: logo_image },
              { Name: 'Camp Yesiva Ketanah', ImageUrl: logo_image },
              { Name: 'Camp Mesivta', ImageUrl: logo_image },
              { Name: 'Camp Nalah', ImageUrl: logo_image },
            ]
          },
          {
            Name: 'Mosdos in Numbers', ImageUrl: logo_image, Images: [
              { Name: '3564 Students', ImageUrl: logo_image },
              { Name: '12 Buildings', ImageUrl: logo_image },
              { Name: '36 School Busses', ImageUrl: logo_image },
              { Name: '145 Classrooms', ImageUrl: logo_image },
              { Name: '472 Staff Members', ImageUrl: logo_image },
              { Name: '10191 Meals Daily', ImageUrl: logo_image },
            ]
          },
          {
            Name: 'Administration', ImageUrl: logo_image, Images: [
              {
                Name: 'Budget', ImageUrl: logo_image, Images: [
                  {
                    Name: 'Outgoing', ImageUrl: logo_image, Images: [
                      { Name: 'Payroll $0', ImageUrl: logo_image },
                      { Name: 'Food $0', ImageUrl: logo_image },
                      { Name: 'Maintenance $0', ImageUrl: logo_image },
                      { Name: 'Gas $0', ImageUrl: logo_image },
                      { Name: 'Electric $0', ImageUrl: logo_image },
                      { Name: 'Insurance $0', ImageUrl: logo_image },
                    ]
                  },
                  {
                    Name: 'Income', ImageUrl: logo_image, Images: [
                      {
                        Name: 'Fundraising', ImageUrl: logo_image, Images: [
                          { Name: 'Donors', ImageUrl: logo_image },
                        ]
                      },
                      { Name: 'Touition', ImageUrl: logo_image },
                      { Name: 'Programs', ImageUrl: logo_image },
                      { Name: 'Grants', ImageUrl: logo_image },
                    ]
                  },
                ]
              },
              {
                Name: 'Board Members', ImageUrl: logo_image, Images: [
                  { Name: 'Zwibel', ImageUrl: logo_image },
                  { Name: 'Birnbaum', ImageUrl: logo_image },
                  { Name: 'Steinberg', ImageUrl: logo_image },
                  { Name: 'Halberstam', ImageUrl: logo_image },
                  { Name: 'Einhorn', ImageUrl: logo_image },
                ]
              },

            ]
          },
        ]
      },




      {
        Name: 'Khilah', ImageUrl: logo_image, Id: 2, Images: [
          { Name: 'Image 1', ImageUrl: logo_image },
          { Name: 'Image 2', ImageUrl: logo_image },
          { Name: 'Image 3', ImageUrl: logo_image },
          { Name: 'Image 4', ImageUrl: logo_image },
          { Name: 'Image 5', ImageUrl: logo_image },
          { Name: 'Image 6', ImageUrl: logo_image },
          { Name: 'Image 7', ImageUrl: logo_image },
          { Name: 'Image 8', ImageUrl: logo_image },
          { Name: 'Image 9', ImageUrl: logo_image },
          { Name: 'Image 10', ImageUrl: logo_image },
          { Name: 'Image 11', ImageUrl: logo_image },
          { Name: 'Image 12', ImageUrl: logo_image },
          { Name: 'Image 13', ImageUrl: logo_image },
          { Name: 'Image 14', ImageUrl: logo_image },
          { Name: 'Image 15', ImageUrl: logo_image },
          { Name: 'Image 16', ImageUrl: logo_image },
          { Name: 'Image 17', ImageUrl: logo_image },
          { Name: 'Image 18', ImageUrl: logo_image },
          { Name: 'Image 19', ImageUrl: logo_image },
          { Name: 'Image 20', ImageUrl: logo_image },
          { Name: 'Image 21', ImageUrl: logo_image },
          { Name: 'Image 22', ImageUrl: logo_image },
          { Name: 'Image 23', ImageUrl: logo_image },
          { Name: 'Image 24', ImageUrl: logo_image },
          { Name: 'Image 25', ImageUrl: logo_image },
        ]
      },
      {
        Name: 'Rebbis', ImageUrl: logo_image, Id: 3, Images: [
          { Name: 'Image 1', ImageUrl: logo_image },
          { Name: 'Image 2', ImageUrl: logo_image },
          { Name: 'Image 3', ImageUrl: logo_image },
          { Name: 'Image 4', ImageUrl: logo_image },
          { Name: 'Image 5', ImageUrl: logo_image },
          { Name: 'Image 6', ImageUrl: logo_image },
          { Name: 'Image 7', ImageUrl: logo_image },
          { Name: 'Image 8', ImageUrl: logo_image },
          { Name: 'Image 9', ImageUrl: logo_image },
          { Name: 'Image 10', ImageUrl: logo_image },
          { Name: 'Image 11', ImageUrl: logo_image },
          { Name: 'Image 12', ImageUrl: logo_image },
          { Name: 'Image 13', ImageUrl: logo_image },
          { Name: 'Image 14', ImageUrl: logo_image },
          { Name: 'Image 15', ImageUrl: logo_image },
          { Name: 'Image 16', ImageUrl: logo_image },
          { Name: 'Image 17', ImageUrl: logo_image },
          { Name: 'Image 18', ImageUrl: logo_image },
          { Name: 'Image 19', ImageUrl: logo_image },
          { Name: 'Image 20', ImageUrl: logo_image },
          { Name: 'Image 21', ImageUrl: logo_image },
          { Name: 'Image 22', ImageUrl: logo_image },
          { Name: 'Image 23', ImageUrl: logo_image },
          { Name: 'Image 24', ImageUrl: logo_image },
          { Name: 'Image 25', ImageUrl: logo_image },
        ]
      },

      {
        Name: 'Organizations', ImageUrl: logo_image, Id: 4, Images: [
          { Name: 'Image 1', ImageUrl: logo_image },
          { Name: 'Image 2', ImageUrl: logo_image },
          { Name: 'Image 3', ImageUrl: logo_image },
          { Name: 'Image 4', ImageUrl: logo_image },
          { Name: 'Image 5', ImageUrl: logo_image },
          { Name: 'Image 6', ImageUrl: logo_image },
          { Name: 'Image 7', ImageUrl: logo_image },
          { Name: 'Image 8', ImageUrl: logo_image },
          { Name: 'Image 9', ImageUrl: logo_image },
          { Name: 'Image 10', ImageUrl: logo_image },
          { Name: 'Image 11', ImageUrl: logo_image },
          { Name: 'Image 12', ImageUrl: logo_image },
          { Name: 'Image 13', ImageUrl: logo_image },
          { Name: 'Image 14', ImageUrl: logo_image },
          { Name: 'Image 15', ImageUrl: logo_image },
          { Name: 'Image 16', ImageUrl: logo_image },
          { Name: 'Image 17', ImageUrl: logo_image },
          { Name: 'Image 18', ImageUrl: logo_image },
          { Name: 'Image 19', ImageUrl: logo_image },
          { Name: 'Image 20', ImageUrl: logo_image },
          { Name: 'Image 21', ImageUrl: logo_image },
          { Name: 'Image 22', ImageUrl: logo_image },
          { Name: 'Image 23', ImageUrl: logo_image },
          { Name: 'Image 24', ImageUrl: logo_image },
          { Name: 'Image 25', ImageUrl: logo_image },
        ]
      },
      {
        Name: 'A Decade of Development', ImageUrl: logo_image, Id: 5, Images: [
          { Name: 'Image 1', ImageUrl: logo_image },
          { Name: 'Image 2', ImageUrl: logo_image },
          { Name: 'Image 3', ImageUrl: logo_image },
          { Name: 'Image 4', ImageUrl: logo_image },
          { Name: 'Image 5', ImageUrl: logo_image },
          { Name: 'Image 6', ImageUrl: logo_image },
          { Name: 'Image 7', ImageUrl: logo_image },
          { Name: 'Image 8', ImageUrl: logo_image },
          { Name: 'Image 9', ImageUrl: logo_image },
          { Name: 'Image 10', ImageUrl: logo_image },
          { Name: 'Image 11', ImageUrl: logo_image },
          { Name: 'Image 12', ImageUrl: logo_image },
          { Name: 'Image 13', ImageUrl: logo_image },
          { Name: 'Image 14', ImageUrl: logo_image },
          { Name: 'Image 15', ImageUrl: logo_image },
          { Name: 'Image 16', ImageUrl: logo_image },
          { Name: 'Image 17', ImageUrl: logo_image },
          { Name: 'Image 18', ImageUrl: logo_image },
          { Name: 'Image 19', ImageUrl: logo_image },
          { Name: 'Image 20', ImageUrl: logo_image },
          { Name: 'Image 21', ImageUrl: logo_image },
          { Name: 'Image 22', ImageUrl: logo_image },
          { Name: 'Image 23', ImageUrl: logo_image },
          { Name: 'Image 24', ImageUrl: logo_image },
          { Name: 'Image 25', ImageUrl: logo_image },
        ]
      },

    ]
  }

}


export interface Category {
  Id?: number;
  Name?: string;
  ImageUrl?: string;
  LoadInPopup?: boolean;
  Images?: Category[];

}
