import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { FullPagesRoutingModule } from "./full-pages-routing.module";
import { ChartistModule} from 'ng-chartist';
// import { AgmCoreModule } from '@agm/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { GalleryPageComponent } from "./gallery/gallery-page.component";
import { InvoicePageComponent } from "./invoice/invoice-page.component";
import { HorizontalTimelinePageComponent } from "./timeline/horizontal/horizontal-timeline-page.component";
import { HorizontalTimelineComponent } from './timeline/horizontal/component/horizontal-timeline.component';
 import { VerticalTimelinePageComponent } from "./timeline/vertical/vertical-timeline-page.component";
import { UserProfilePageComponent } from "./user-profile/user-profile-page.component";
import { SearchComponent } from './search/search.component';
import { FaqComponent } from './faq/faq.component';
import { KnowledgeBaseComponent } from './knowledge-base/knowledge-base.component';
<<<<<<< HEAD
=======
import { DetailPageComponent } from './detail-page/detail-page.component';
>>>>>>> 9903b325cca36ee574cd79beb7683a58dc383b6f


@NgModule({
    imports: [
        CommonModule,
        FullPagesRoutingModule,
        FormsModule,
        ChartistModule,
        // AgmCoreModule,
        NgbModule
    ],
    declarations: [       
        GalleryPageComponent,
        InvoicePageComponent,       
        HorizontalTimelinePageComponent,
        HorizontalTimelineComponent,
        VerticalTimelinePageComponent,
        UserProfilePageComponent,
        SearchComponent,
        FaqComponent,
<<<<<<< HEAD
        KnowledgeBaseComponent
=======
        KnowledgeBaseComponent,
        DetailPageComponent
>>>>>>> 9903b325cca36ee574cd79beb7683a58dc383b6f
    ]
})
export class FullPagesModule { }
