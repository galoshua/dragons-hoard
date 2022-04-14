import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NarratorComponent } from './narrator/narrator.component';
import { CharacterComponent } from './character/character.component';
import { CharacterAttributesComponent } from './character/character-attributes/character-attributes.component';
import { NpcStatsComponent } from './shared/npc-stats/npc-stats.component';
import { MonsterStatsComponent } from './shared/monster-stats/monster-stats.component';
import { RollableTablesComponent } from './shared/rollable-tables/rollable-tables.component';
import { GameNotesComponent } from './shared/game-notes/game-notes.component';
import { CharacterNotesComponent } from './narrator/character-notes/character-notes.component';
import { InitiativeTrackerComponent } from './shared/initiative-tracker/initiative-tracker.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NarratorComponent,
    CharacterComponent,
    CharacterAttributesComponent,
    NpcStatsComponent,
    MonsterStatsComponent,
    RollableTablesComponent,
    GameNotesComponent,
    CharacterNotesComponent,
    InitiativeTrackerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
