//test
import {Injectable} from "@angular/core"
import {HttpClient} from "@angular/common/http"
import {Observable} from "rxjs"
import {map} from "rxjs"

export interface Task {
    id?: string
    title: string
    description: string
}

interface CreateResponse {
    name: string
}

@Injectable({providedIn: 'root'})
export class TasksService {
    static url = 'https://diary-1bc1c-default-rtdb.firebaseio.com/tasks'

    constructor(private http: HttpClient) {

    }

    load() {
        return this.http
        .get<Task[]>(`${TasksService.url}/`)
    }

    create(task: Task): Observable<Task> {
        return this.http
            .post<CreateResponse>(`${TasksService.url}/${task.title}.json`, task)
            .pipe(map(res => {
                return {...task, id: res.name}
            }))

    }
}
