import { Component } from "@angular/core";
import { LoadingController, NavController } from "@ionic/angular";

import { Provider } from "../../providers/service";
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  private repoList: Array<any>;
  private topFiveRcrds: Array<any>;
  private query: string;
  private numOfRecords: number = 5;
  avgScore: number = 0;
  showBtn: Boolean = false;
  filterBtn: Boolean = false;
  
  constructor(
    private providerApi: Provider,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
  ) {
    this.query = "";
  }

  showSearchButton(e) {
    if (e.detail.value.length >= 3) {
      this.showBtn = true;
      console.log(e.detail.value);
      this.query = e.detail.value;
    } else {
      this.showBtn = false;
      this.query = "";
      this.repoList = undefined;
    }
  }

  search(event) {
    //this.query = event.detail.value;
    let keywords = [];
    console.log(this.query);
    keywords = this.query.split(/[ ,]+/);
    console.log(keywords);

    this.presentLoading();
    this.providerApi.getFeed(keywords).subscribe(async response => {
      //  this.navParamsSrv.set('detail', items);
      //console.log(response);
      this.topFiveRcrds = response.items.slice(0, this.numOfRecords);
      this.repoList = response.items.slice(0, this.numOfRecords);
      this.calculateAvgScore(this.repoList);
      this.filterBtn = true;
      await this.loadingCtrl.dismiss();
      //  await this.navCtrl.goForward('/detail')
    });
  }
  calculateAvgScore(itemList) {
    this.avgScore = 0;

    var items = itemList.slice(0, this.numOfRecords).map(i => {
      this.avgScore += i.score / this.numOfRecords;
    });
    this.avgScore = Math.round(this.avgScore * 100) / 100;
    console.log(this.avgScore);
  }

  showDataByAvg(noOfRcrdsOnView) {
    //  console.log(noOfRcrdsOnView)
    if (noOfRcrdsOnView == 5) {
      let tempCityList = this.repoList.slice(0, this.numOfRecords);
      this.repoList = [];
      for (let i in tempCityList) {
        if (tempCityList[i].score >= this.avgScore) {
          this.repoList.push(tempCityList[i]);
        }
      }
    } else {
      this.repoList = [];
      this.repoList = this.topFiveRcrds;
    }
  }


  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      content: "Please wait...",
      translucent: true,
      cssClass: "custom-class custom-loading"
    });
    return await loading.present();
  }
}
